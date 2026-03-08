<x-dynamic-component :component="$getEntryWrapperView()" :entry="$entry">
    <livewire:dynamic-component
        :component="$commentionsComponentPrefix . 'comments'"
        :key="'comments-entry-' . $getRecord()->getKey()"
        :record="$getRecord()"
        :mentionables="$getMentionables()"
        :polling-interval="$getPollingInterval()"
        :paginate="$isPaginated()"
        :per-page="$getPerPage()"
        :load-more-label="$getLoadMoreLabel()"
        :per-page-increment="$getPerPageIncrement()"
        :sidebar-enabled="$isSidebarEnabled()"
        :tip-tap-css-classes="$getTipTapCssClasses()"
    />
</x-dynamic-component>
