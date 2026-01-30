<script lang="ts">
	import Button from '$lib/components/input/Button.svelte';
	import Input from '$lib/components/input/Input.svelte';
	import InputWrapper from '$lib/components/input/InputWrapper.svelte';
	import { explicitEffect } from '$lib/utils/svelte.svelte';

	interface Props {
		ip: string;
		pin: number;
		initialLedCount?: number;
		onSubmit: (ledCount: number) => void;
		onFinish: (ledCount: number) => void;
	}

	let { ip, initialLedCount, onSubmit, onFinish }: Props = $props();

	let ledRequestLoading = $state(false);
	let ledCount = $state<number | null>(initialLedCount ?? 20);
	let timeoutId: ReturnType<typeof setTimeout> | null = null;

	const handleGlowing = () => {
		if (ledCount === null) return;
		onSubmit(ledCount);
	};

	const handleNotGlowing = () => {
		if (ledCount === null) ledCount = 10;
		ledCount = ledCount + 20;
		createLedRequest(ledCount);
	};

	const createLedRequest = (ledCount: number) => {
		// Simulate request
		ledRequestLoading = true;
		setTimeout(() => {
			//use ip and pin and ledCount to send request
			ledRequestLoading = false;
		}, 1000);
	};

	explicitEffect(
		() => {
			if (ledCount !== null && ledCount > 0) {
				//create request to set led count
				//just simulate for now

				// Clear existing timeout if any
				if (timeoutId !== null) {
					clearTimeout(timeoutId);
				}

				ledRequestLoading = true;
				timeoutId = setTimeout(() => {
					ledRequestLoading = false;
					timeoutId = null;
				}, 500);
			}
		},
		() => [ledCount]
	);
</script>

<!-- <InputWrapper
				collapsable={true}
				label="LED Count (optional)"
				subtext="Total number of LEDs connected to the controller"
			>
				<Input icon="straighten" placeholder="e.g. 60" type="number" />
			</InputWrapper> -->

<!-- Progress Bar -->
<main class="flex flex-1 flex-col px-6 py-4">
	<!-- Visual Illustration Container -->
	<div
		class="relative mt-4 mb-8 flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-slate-300 bg-slate-200 dark:border-slate-700 dark:bg-slate-800/50"
	>
		<div
			class="from-primary absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] via-transparent to-transparent opacity-20"
		></div>
		<div class="z-10 flex flex-col items-center">
			<span class="material-symbols-outlined text-primary mb-2 text-6xl">tv_gen</span>
			<div class="flex gap-1">
				<div class="bg-primary h-1.5 w-1.5 animate-pulse rounded-full"></div>
				<div class="bg-primary h-1.5 w-1.5 animate-pulse rounded-full delay-75"></div>
				<div class="bg-primary h-1.5 w-1.5 animate-pulse rounded-full delay-150"></div>
			</div>
		</div>
		<img
			alt="TV backlight ambient glow"
			class="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-overlay"
			data-alt="Abstract glowing lights behind a television screen"
			src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtKeMwVuf_x-IHJk_1mr1M1KKvDQyzXRB0aJPM8uXGiMI50JKpBie6ur5Pjar872NLXE_gCAHc_4rk90i_Dwe80ez3LL5Yx6j786cKgwuOGF5YqffCUgIJyec7_WL_9LHsLLiA2s2VDWH8wc-k7zqiBKVJwllI5Z9GmF4xEb2_3lowJa3XHzZqKIeCxHL1TRWKs30puSFM1j4NEuRx8bbuvLhUGMqNmH6fx-7T10vrEIOa-kvXAAVjGKNX4rK1hNXBVR7mzO2YnA"
		/>
	</div>
	<!-- Headline -->
	<h1
		class="pb-3 text-center text-3xl leading-tight font-bold tracking-tight text-slate-900 dark:text-white"
	>
		Are all your LEDs lit up?
	</h1>
	<!-- Body Text -->
	<p
		class="mx-auto max-w-xs pb-8 text-center text-base leading-relaxed font-normal text-slate-600 dark:text-slate-400"
	>
		Your Raspberry Pi has sent a signal to illuminate the entire strip. Look behind your TV now.
	</p>
	<!-- Button Group -->
	<div class="mb-10 flex flex-col gap-4">
		<Button onclick={handleGlowing} loading={ledRequestLoading} variant="primary"
			>Yes, all are glowing</Button
		>
		<Button onclick={handleNotGlowing} loading={ledRequestLoading} variant="secondary"
			>No, some are dark</Button
		>
	</div>
	<!-- Manual Input Section -->
	<div class="mt-auto border-t border-slate-200 pt-6 dark:border-slate-800">
		<div class="flex flex-col gap-4">
			<InputWrapper label="Manual Led Count" collapsable subtext="">
				<div class="flex flex-col gap-4">
					<Input
						bind:value={ledCount}
						type="number"
						placeholder="Enter total LEDs (e.g. 60)"
						icon="straighten"
					/>
					<Button
						onclick={() => onFinish(ledCount ?? 10)}
						loading={ledRequestLoading}
						disabled={ledCount === null || ledCount <= 0 || ledRequestLoading}>All are lit</Button
					>
				</div>
			</InputWrapper>
		</div>
	</div>
</main>
<!-- Footer Spacer for iOS home indicator -->
<div class="bg-background-light dark:bg-background-dark h-8"></div>
