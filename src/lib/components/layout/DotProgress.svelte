<script lang="ts">
	interface Props {
		currentStep?: number;
		totalSteps?: number;
		animate?: boolean;
		onSelect?: (step: number) => void;
	}

	let { currentStep = 2, totalSteps = 6, animate = true, onSelect }: Props = $props();

	const handleDotClick = (step: number) => {
		if (onSelect) {
			onSelect(step);
		}
	};
</script>

<div class="flex w-full flex-row items-center justify-center gap-3 py-4">
	{#each Array(totalSteps) as _, index}
		{@const stepNum = index + 1}
		{@const isActive = stepNum === currentStep}
		<button
			type="button"
			onclick={() => handleDotClick(stepNum)}
			disabled={!onSelect}
			class="rounded-full transition-all duration-500 ease-out {onSelect
				? 'cursor-pointer hover:opacity-80'
				: ''} {isActive
				? 'bg-primary h-2 w-10 shadow-[0_0_10px_rgba(19,91,236,0.5)]'
				: 'h-2 w-2 bg-slate-300 dark:bg-[#324467]'}"
			aria-label="Go to step {stepNum}"
		></button>
	{/each}
</div>
