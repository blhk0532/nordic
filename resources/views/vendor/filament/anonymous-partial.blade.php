{{-- Wrapper div ensures partial content always has a root HTML element,
      which is required by Livewire's insertAttributesIntoHtmlRoot() --}}
<div>{!! value($html) !!}</div>
