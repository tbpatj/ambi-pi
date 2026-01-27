<script lang="ts">
	interface Props {
		title?: string;
		onBack?: () => void;
	}

	let { title = 'Setup', onBack }: Props = $props();

	const handleBackClick = () => {
		if (onBack) {
			onBack();
		}
	};
</script>

<div class="flex shrink-0 items-center justify-between bg-transparent p-4 pb-2">
	<button
		type="button"
		onclick={handleBackClick}
		class="flex size-12 shrink-0 items-center justify-start text-white {onBack
			? 'cursor-pointer hover:opacity-80'
			: ''}"
		aria-label="Go back"
		disabled={!onBack}
	>
		<span class="material-symbols-outlined">arrow_back_ios</span>
	</button>
	<h2
		class="flex-1 pr-12 text-center text-lg leading-tight font-bold tracking-[-0.015em] text-white"
	>
		{title}
	</h2>
</div>
