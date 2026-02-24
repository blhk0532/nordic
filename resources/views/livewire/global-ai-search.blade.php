<div
    id="global-ai-search"
    x-data="{
        open: false,
        init() {
            $watch('$wire.messages', () => {
                setTimeout(() => {
                    const container = this.$refs.chatContainer;
                    if (container) container.scrollTop = container.scrollHeight;
                }, 50);
            });
        }
    }"
    x-show="open"
    x-cloak
    x-on:open-modal.window="if ($event.detail.id === 'global-ai-search') { open = true }"
    x-on:close-modal.window="if ($event.detail.id === 'global-ai-search') { open = false }"
    class="fixed inset-0 z-50 overflow-hidden"
    >
    <style>
        @keyframes bounce { 0%, 60%, 100% { transform: translateY(0); } 30% { transform: translateY(-4px); } }
        [x-cloak] { display: none !important; }
    </style>
    <div
        x-show="open"
        x-transition:enter="ease-out duration-300"
        x-transition:enter-start="opacity-0"
        x-transition:enter-end="opacity-100"
        x-transition:leave="ease-in duration-200"
        x-transition:leave-start="opacity-100"
        x-transition:leave-end="opacity-0"
        class="fixed inset-0 bg-black/50 transition-opacity"
        x-on:click="open = false"
    ></div>
    <div
        x-show="open"
        x-transition:enter="ease-out duration-300"
        x-transition:enter-start="opacity-0 translate-x-full"
        x-transition:enter-end="opacity-100 translate-x-0"
        x-transition:leave="ease-in duration-200"
        x-transition:leave-start="opacity-100 translate-x-0"
        x-transition:leave-end="opacity-0 translate-x-full"
        class="fixed inset-y-0 right-0 z-50 w-full sm:max-w-2xl bg-white dark:bg-gray-800 shadow-xl overflow-hidden"
        style="height: 100vh; max-width: 600px;"
    >
        <div class="flex flex-col h-full">
            <div class="flex items-center justify-between p-4 border-b dark:border-gray-700 bg-primary-600">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <x-filament::icon icon="heroicon-o-chat-bubble-left-ellipsis" class="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h2 class="text-lg font-semibold text-white">AI Assistant</h2>
                <p class="text-xs text-white/70" x-show="!$wire.isLoading && $wire.isAvailable">Online</p>
                <p class="text-xs text-red-200" x-show="!$wire.isAvailable">AI service ej tillgänglig</p>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <button
                        x-on:click="$wire.newConversation()"
                        class="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                        title="Ny konversation"
                    >
                        <x-filament::icon icon="heroicon-o-plus" class="w-5 h-5" />
                    </button>
                    <button
                        x-on:click="$wire.clearChat()"
                        class="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                        title="Rensa chatt"
                    >
                        <x-filament::icon icon="heroicon-o-trash" class="w-5 h-5" />
                    </button>
                    <button
                        x-on:click="open = false"
                        class="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                        <x-filament::icon icon="heroicon-o-x-mark" class="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div
                x-ref="chatContainer"
                x-init="
                    $watch('$wire.messages', () => {
                        setTimeout(() => {
                            $el.scrollTop = $el.scrollHeight;
                        }, 50);
                    });
                    $el.scrollTop = $el.scrollHeight;
                "
                class="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900"
            >
                <template x-for="(message, index) in $wire.messages" :key="index">
                    <div
                        class="flex"
                        :class="message.role === 'user' ? 'justify-end' : 'justify-start'"
                    >
                        <div
                            class="max-w-[85%] rounded-2xl px-4 py-3"
                            :class="message.role === 'user'
                                ? 'bg-primary-600 text-white rounded-br-md'
                                : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-md shadow-sm'"
                        >
                            <div class="flex items-start gap-2" x-show="message.role === 'assistant'">
                                <div class="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <x-filament::icon icon="heroicon-o-chat-bubble-left-ellipsis" class="w-3.5 h-3.5 text-white" />
                                </div>
                            </div>
                            <div class="flex items-start gap-2" x-show="message.role === 'user'">
                                <div class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <x-filament::icon icon="heroicon-o-user" class="w-3.5 h-3.5 text-white" />
                                </div>
                            </div>
                            <p class="text-sm whitespace-pre-wrap" x-text="message.content"></p>
                        </div>
                    </div>
                </template>

                <div x-show="$wire.isLoading" class="flex justify-start" x-transition>
                    <div class="bg-white dark:bg-gray-800 rounded-2xl rounded-bl-md shadow-sm px-4 py-3">
                        <div class="flex items-center gap-2">
                            <div class="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
                                <svg class="animate-spin h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            </div>
                            <span class="text-sm text-gray-500">Skriver...</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-4 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
                <form
                    x-data
                    wire:submit.prevent="sendMessage"
                    class="flex items-center gap-2"
                >
                    <input
                        type="text"
                        wire:model.live="input"
                        wire:keydown.enter.prevent="sendMessage"
                        placeholder="Skriv ett meddelande..."
                        class="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                    >
                    <button
                        type="submit"
                        class="p-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white transition-colors flex items-center justify-center min-w-[44px]"
                    >
                        <span wire:loading.delay wire:target="sendMessage">
                            <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </span>
                        <span wire:loading.delay.remove wire:target="sendMessage">
                            <x-filament::icon icon="heroicon-m-paper-airplane" class="w-5 h-5" />
                        </span>
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
