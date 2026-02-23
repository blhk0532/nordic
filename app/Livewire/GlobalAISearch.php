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

    public ?AiChatConversation $conversation = null;

    public function mount(): void
    {
        $this->isAvailable = app(AIService::class)->isAvailable();
        $this->loadOrCreateConversation();
    }

    protected function loadOrCreateConversation(): void
    {
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
        $messages = $this->conversation->messages()->get();

        if ($messages->isEmpty()) {
            $this->messages = [
                [
                    'role' => 'assistant',
                    'content' => 'Hej! Jag är din AI-assistent. Jag kan hjälpa dig med frågor om dina kunder, bokningar, ringa-data eller annat. Vad kan jag hjälpa dig med idag?',
                ],
            ];
        } else {
            $this->messages = $messages->map(fn ($m) => [
                'role' => $m->role,
                'content' => $m->content,
            ])->toArray();
        }
    }

    public function sendMessage(): void
    {
        if (empty(trim($this->input)) || $this->isLoading) {
            return;
        }

        $userMessage = trim($this->input);
        $this->messages[] = ['role' => 'user', 'content' => $userMessage];
        $this->input = '';
        $this->isLoading = true;

        $this->dispatch('scroll-to-bottom');

        AiChatMessage::create([
            'conversation_id' => $this->conversation->id,
            'role' => 'user',
            'content' => $userMessage,
        ]);

        try {
            $aiService = app(AIService::class);
            $history = array_slice($this->messages, -10);
            $response = $aiService->chat($userMessage, $history);

            $this->messages[] = ['role' => 'assistant', 'content' => $response];

            AiChatMessage::create([
                'conversation_id' => $this->conversation->id,
                'role' => 'assistant',
                'content' => $response,
            ]);
        } catch (\Exception $e) {
            $errorMessage = 'Sorry, jag kunde inte få ett svar. Är Ollama igång?';
            $this->messages[] = ['role' => 'assistant', 'content' => $errorMessage];

            AiChatMessage::create([
                'conversation_id' => $this->conversation->id,
                'role' => 'assistant',
                'content' => $errorMessage,
            ]);
        }

        $this->isLoading = false;
        $this->dispatch('scroll-to-bottom');
    }

    public function clearChat(): void
    {
        $this->conversation->messages()->delete();

        $this->messages = [
            [
                'role' => 'assistant',
                'content' => 'Hej! Jag är din AI-assistent. Jag kan hjälpa dig med frågor om dina kunder, bokningar, ringa-data eller annat. Vad kan jag hjälpa dig med idag?',
            ],
        ];
    }

    public function newConversation(): void
    {
        $this->conversation = AiChatConversation::create([
            'user_id' => auth()->id(),
            'title' => 'New Conversation',
        ]);

        $this->messages = [
            [
                'role' => 'assistant',
                'content' => 'Hej! Jag är din AI-assistent. Jag kan hjälpa dig med frågor om dina kunder, bokningar, ringa-data eller annat. Vad kan jag hjälpa dig med idag?',
            ],
        ];
    }

    public function render(): \Illuminate\Contracts\View\View
    {
        return view('livewire.global-ai-search');
    }
}
