<script lang="ts">
	interface Props {
		currentStep?: number;
		totalSteps?: number;
		stepLabel?: string;
		showStepCounter?: boolean;
		animate?: boolean;
	}

	let {
		currentStep = 1,
		totalSteps = 6,
		stepLabel = 'Connection',
		showStepCounter = true,
		animate = true
	}: Props = $props();

	// Calculate progress percentage
	const progress = $derived(Math.min((currentStep / totalSteps) * 100, 100));
</script>

<div class="flex shrink-0 flex-col gap-3 p-4">
	<div class="flex justify-between gap-6">
		<p class="text-base leading-normal font-medium text-white">
			Step {currentStep}: {stepLabel}
		</p>
		{#if showStepCounter}
			<p class="text-sm leading-normal font-normal text-white">
				{currentStep}/{totalSteps}
			</p>
		{/if}
	</div>
	<div class="overflow-hidden rounded-full bg-[#324467]">
		<div
			class="bg-primary h-1.5 rounded-full {animate ? 'transition-all duration-500 ease-out' : ''}"
			style="width: {progress}%;"
		></div>
	</div>
</div>
