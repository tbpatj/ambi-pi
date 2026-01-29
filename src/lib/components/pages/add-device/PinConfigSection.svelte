<script>
	import DropDown from '$lib/components/input/DropDown.svelte';
	import Input from '$lib/components/input/Input.svelte';
	import InputWrapper from '$lib/components/input/InputWrapper.svelte';
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
					icon="settings_input_component"
					label="Data Pin"
					placeholder="e.g. 18 (GPIO18 / Pin 12)"
					type="number"
				/>
			</InputWrapper>
		</div>
		<div class="flex flex-col gap-2">
			<InputWrapper
				collapsable={true}
				label="LED Count (optional)"
				subtext="Total number of LEDs connected to the controller"
			>
				<Input icon="straighten" placeholder="e.g. 60" type="number" />
			</InputWrapper>
			<!-- <label class="px-1 text-sm font-semibold text-slate-900 dark:text-white"
				>LED Count <span class="font-normal text-slate-400">(Optional)</span></label
			>
			<div class="relative">
				<input
					class="focus:ring-primary w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-slate-900 transition-all outline-none placeholder:text-slate-400 focus:border-transparent focus:ring-2 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-600"
					placeholder="e.g. 60"
					type="number"
				/>
				<span
					class="material-symbols-outlined absolute top-1/2 right-4 -translate-y-1/2 text-slate-400"
					>straighten</span
				>
			</div>
			<p class="px-1 text-xs text-slate-500 italic dark:text-slate-500">
				Helps estimate power requirements
			</p> -->
		</div>
		<div class="flex flex-col gap-2">
			<button
				class="bg-primary shadow-primary/20 flex w-full items-center justify-center gap-2 rounded-xl py-4 font-bold text-white shadow-lg transition-transform hover:bg-blue-600 active:scale-[0.98]"
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
