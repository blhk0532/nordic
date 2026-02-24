<?php

declare(strict_types=1);

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class AIService
{
    private string $baseUrl;

    private string $model;

    public function __construct()
    {
        $this->baseUrl = config('services.ollama.base_url', 'http://ai.ndsth.com');
        $this->model = config('services.ollama.model', 'llama3.2');
    }

    public function chat(string $message, array $history = []): string
    {
        try {
            $messages = $this->buildMessages($message, $history);

            $response = Http::timeout(120)
                ->post("{$this->baseUrl}/api/chat", [
                    'model' => $this->model,
                    'messages' => $messages,
                    'stream' => false,
                ]);

            if ($response->successful()) {
                $data = $response->json();

                return $data['message']['content'] ?? 'No response received';
            }

            Log::error('AI Service Error', ['response' => $response->body()]);

            return 'Sorry, I encountered an error. Is Ollama running?';

        } catch (\Exception $e) {
            Log::error('AI Service Exception', ['error' => $e->getMessage()]);

            return 'Sorry, I could not connect to the AI service. Please make sure Ollama is running.';
        }
    }

    public function isAvailable(): bool
    {
        try {
            $response = Http::timeout(5)->get("{$this->baseUrl}/api/tags");

            return $response->successful();
        } catch (\Exception $e) {
            return false;
        }
    }

    private function buildMessages(string $message, array $history): array
    {
        $messages = [];

        foreach ($history as $item) {
            $messages[] = [
                'role' => $item['role'] ?? 'user',
                'content' => $item['content'] ?? '',
            ];
        }

        $messages[] = ['role' => 'user', 'content' => $message];

        return $messages;
    }
}
