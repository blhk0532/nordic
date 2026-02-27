<?php

declare(strict_types=1);

namespace App\Livewire;

use App\Models\AiChatConversation;
use App\Models\AiChatMessage;
use App\Services\AIService;
use Livewire\Component;

class GlobalAISearch extends Component
{
    public array $messages = [];

    public string $input = '';

    public bool $isLoading = false;

    public bool $isAvailable = false;

    public bool $isInitialized = false;

    public ?AiChatConversation $conversation = null;

    public function mount(): void
    {
        //
    }

    public function initializeChat(): void
    {
        if ($this->isInitialized && $this->conversation) {
            return;
        }

        $this->isAvailable = app(AIService::class)->isAvailable();
        $this->loadOrCreateConversation();
        $this->isInitialized = true;
    }

    protected function loadOrCreateConversation(): void
    {
        if ($this->conversation) {
            return;
        }

        $userId = auth()->id();

        $this->conversation = AiChatConversation::where('user_id', $userId)
            ->latest()
            ->first();

        if (! $this->conversation) {
            $this->conversation = AiChatConversation::create([
                'user_id' => $userId,
                'title' => 'New Conversation',
            ]);
        }

        $this->loadMessages();
    }

    protected function loadMessages(): void
    {
        if (! $this->conversation || ! $this->messages) {
            $messages = $this->conversation?->messages()->get() ?? collect();

            if ($messages->isEmpty()) {
                $this->messages = [
                    [
                        'role' => 'assistant',
                        'content' => 'Hej! Jag är din AI-assistent. Jag kan hjälpa dig med frågor om dina kunder, bokningar eller annat. Vad kan jag hjälpa dig med idag?',
                    ],
                ];
            } else {
                $this->messages = $messages->map(fn ($m) => [
                    'role' => $m->role,
                    'content' => $m->content,
                ])->toArray();
            }
        }
    }

    public function sendMessage(): void
    {
        if (empty(trim($this->input)) || $this->isLoading) {
            return;
        }

        if (! $this->isInitialized) {
            $this->initializeChat();
        }

        $userMessage = trim($this->input);

        $this->messages[] = ['role' => 'user', 'content' => $userMessage];

        $this->input = '';
        $this->isLoading = true;

        if ($this->conversation) {
            AiChatMessage::create([
                'conversation_id' => $this->conversation->id,
                'role' => 'user',
                'content' => $userMessage,
            ]);
        }

        try {
            $aiService = app(AIService::class);
            $history = array_slice($this->messages, -10);
            $response = $aiService->chat($userMessage, $history);

            $this->messages[] = ['role' => 'assistant', 'content' => $response];

            if ($this->conversation) {
                AiChatMessage::create([
                    'conversation_id' => $this->conversation->id,
                    'role' => 'assistant',
                    'content' => $response,
                ]);
            }
        } catch (\Exception $e) {
            $errorMessage = 'Sorry, jag kunde inte få ett svar. Försök igen senare.';

            $this->messages[] = ['role' => 'assistant', 'content' => $errorMessage];

            if ($this->conversation) {
                AiChatMessage::create([
                    'conversation_id' => $this->conversation->id,
                    'role' => 'assistant',
                    'content' => $errorMessage,
                ]);
            }
        }

        $this->isLoading = false;
    }

    public function clearChat(): void
    {
        if (! $this->isInitialized) {
            $this->initializeChat();
        }

        $this->conversation->messages()->delete();

        $this->messages = [
            [
                'role' => 'assistant',
                'content' => 'Hej! Jag är din AI-assistent. Jag kan hjälpa dig med frågor om dina kunder, bokningar eller annat. Vad kan jag hjälpa dig med idag?',
            ],
        ];
    }

    public function newConversation(): void
    {
        if (! $this->isInitialized) {
            $this->initializeChat();
        }

        $this->conversation = AiChatConversation::create([
            'user_id' => auth()->id(),
            'title' => 'New Conversation',
        ]);

        $this->messages = [
            [
                'role' => 'assistant',
                'content' => 'Hej! Jag är din AI-assistent. Jag kan hjälpa dig med frågor om dina kunder, bokningar eller annat. Vad kan jag hjälpa dig med idag?',
            ],
        ];
    }

    public function render(): \Illuminate\Contracts\View\View
    {
        return view('livewire.global-ai-search');
    }
}
