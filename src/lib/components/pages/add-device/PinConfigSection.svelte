<script lang="ts">
	import DropDown from '$lib/components/input/DropDown.svelte';
	import Input from '$lib/components/input/Input.svelte';
	import InputWrapper from '$lib/components/input/InputWrapper.svelte';
	import type { LEDDeviceType } from '$lib/types/ledDevice';
	import { explicitEffect } from '$lib/utils/svelte.svelte';

	interface Props {
		initialPin?: number;
		initialType?: string;
		onSubmit: (type: LEDDeviceType, pin: number) => void;
	}

	let { onSubmit, initialPin, initialType }: Props = $props();

	let ledStripType = $state(initialType || 'ws2812b');
	let dataPin = $state<number | null>(initialPin ?? null);
	let pinError = $state('');
	let mounted = $state(false);

	const PIN_MIN = 2;
	const PIN_MAX = 27;

	explicitEffect(
		() => {
			if (!mounted) {
				mounted = true;
				return;
			}
			if (dataPin === null) {
				pinError = 'Enter a numeric GPIO pin';
				return;
			}
			if (dataPin < PIN_MIN || dataPin > PIN_MAX) {
				pinError = `Use GPIO pins ${PIN_MIN}-${PIN_MAX}`;
				return;
			}
			pinError = '';
		},
		() => [dataPin]
	);

	const canSubmit = $derived(dataPin !== null && pinError === '');
</script>

<main class="flex-1 px-4 pb-4">
	<div class="@container w-full py-4">
		<div
			class="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-200 dark:border-slate-800 dark:bg-slate-800/50"
		>
			<div
				class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#135bec_0%,transparent_70%)] opacity-20"
			></div>
			<div
				class="h-full w-full bg-contain bg-center bg-no-repeat"
				data-alt="Stylized schematic of a Raspberry Pi board with GPIO pins highlighted"
				style={`background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1JpEMDHH8H0GxCkDufQqcg1VuY3CDAzJKMqer6djGZmShLRZnNfvHWzBobua2aQ-aIltPseL2ghoqZYc3l4a66gIyJatqj2fGyLiKfAQ1Y2YAb3mE79CpOGwI7xHo3bvzXlo4174MoToWLxBMoKpZviHodHR-vxwOtPYs2QkVMO_rEaFaZN-kWl6i2_D_mmM3WpIzjutU7pq81EW0NyBg9FEZXLNlpv_I57V3sxyKsnAhyiC9O9AGFpFV7eW2mfr63eC1l7l57w");`}
			></div>
		</div>
	</div>
	<h3
		class="pt-4 text-xl leading-tight font-bold tracking-[-0.015em] text-slate-900 dark:text-white"
	>
		Hardware Details
	</h3>
	<p class="pt-1 pb-6 text-base leading-normal font-normal text-slate-600 dark:text-slate-400">
		Specify the hardware configuration for your LED setup. Ensure your power supply matches the
		total LED requirements.
	</p>
	<div class="space-y-6">
		<InputWrapper subtext="Select the protocol your LEDs use">
			<DropDown
				bind:value={ledStripType}
				label="Led Strip Type"
				options={[
					{ value: 'ws2812b', text: 'WS2812B (NeoPixel)' },
					{ value: 'ws2811', text: 'WS2811' },
					{ value: 'sk6812', text: 'SK6812 (RGBW)' },
					{ value: 'apa102', text: 'APA102 (DotStar)' }
				]}
			/>
		</InputWrapper>
		<div class="flex flex-col gap-2">
			<InputWrapper subtext="Standard for WS2812B is GPIO 18 (Pin 12)">
				<Input
					bind:value={dataPin}
					icon="settings_input_component"
					label="Data Pin"
					placeholder="e.g. 18 (GPIO18 / Pin 12)"
					type="number"
					error={pinError || undefined}
				/>
			</InputWrapper>
		</div>

		<div class="flex flex-col gap-2">
			<button
				onclick={() => onSubmit(ledStripType as LEDDeviceType, dataPin!)}
				disabled={!canSubmit}
				aria-disabled={!canSubmit}
				class={`bg-primary shadow-primary/20 flex w-full items-center justify-center gap-2 rounded-xl py-4 font-bold text-white shadow-lg transition-transform hover:bg-blue-600 active:scale-[0.98] ${
					canSubmit ? '' : 'hover:bg-primary cursor-not-allowed opacity-60'
				}`}
			>
				<span>Next Step</span>
				<span class="material-symbols-outlined text-sm">arrow_forward</span>
			</button>
		</div>
	</div>

	<div class="h-4"></div>
</main>
<!-- <div
	class="from-background-light dark:from-background-dark via-background-light dark:via-background-dark fixed right-0 bottom-0 left-0 bg-gradient-to-t to-transparent p-4"
>
	<button
		class="bg-primary shadow-primary/20 flex w-full items-center justify-center gap-2 rounded-xl py-4 font-bold text-white shadow-lg transition-transform hover:bg-blue-600 active:scale-[0.98]"
	>
		<span>Next Step</span>
		<span class="material-symbols-outlined text-sm">arrow_forward</span>
	</button>
	<div class="h-4"></div>
</div> -->
