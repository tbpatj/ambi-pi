<script lang="ts">
	import Button from '$lib/components/input/Button.svelte';

	interface Props {
		onSubmit?: () => void;
	}

	let { onSubmit }: Props = $props();
</script>

<div class="relative flex w-full flex-col overflow-x-hidden">
	<div class="flex flex-1 flex-col items-center justify-center px-6 py-26">
		<div class="relative mb-12 flex items-center justify-center">
			<div class="rgb-aura absolute size-54 rounded-full"></div>
			<div class="rgb-aura-reverse absolute size-54 rounded-full"></div>
			<div
				class="relative z-10 flex size-40 items-center justify-center rounded-full border-4 border-white bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-800"
			>
				<span class="material-symbols-outlined text-[#22c55e]" style="font-size: 60px;"
					>check_circle</span
				>
			</div>
		</div>
		<div class="mb-12 text-center">
			<h1
				class="font-display text-3xl leading-tight font-bold tracking-tight text-slate-900 dark:text-white"
			>
				LED Strip Connected!
			</h1>
			<p
				class="mx-auto mt-4 max-w-[320px] text-base leading-relaxed text-slate-500 dark:text-slate-400"
			>
				Your Ambi-Pi controller is now successfully managing <span class="text-primary font-bold"
					>120</span
				> LEDs. You can now control your lights or proceed to TV calibration.
			</p>
		</div>
		<div class="flex w-full max-w-[480px] flex-col gap-4">
			<Button onclick={onSubmit}>Back to Dashboard</Button>
		</div>
	</div>
</div>

<style>
	.rgb-aura {
		background: conic-gradient(
			from 0deg,
			#ff0000,
			#ffff00,
			transparent,
			#00ff00,
			#4b0082,
			transparent,
			#8b00ff,
			#ff0000
		);
		filter: blur(24px);
		opacity: 0.4;
		animation: auraFloat 20s linear infinite;
	}

	.rgb-aura-reverse {
		background: conic-gradient(
			from 0deg,
			#8b00ff,
			transparent,
			#0000ff,
			#00ff00,
			transparent,
			transparent,
			#ffff00,
			transparent,
			#ff0000,
			#8b00ff
		);
		filter: blur(24px);
		opacity: 0.3;
		animation: auraFloatReverse 25s linear infinite;
	}

	@keyframes auraFloat {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes auraFloatReverse {
		0% {
			transform: rotate(360deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
