<div class="relative flex w-full flex-col overflow-x-hidden">
	<div class="flex flex-1 flex-col items-center justify-center px-6 py-26">
		<div class="relative mb-12 flex items-center justify-center">
			<div class="rgb-aura absolute size-64 rounded-full"></div>
			<div
				class="relative z-10 flex size-40 items-center justify-center rounded-full border-4 border-white bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-800"
			>
				<span class="material-symbols-outlined text-success text-8xl">check_circle</span>
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
			<button
				class="bg-primary shadow-primary/25 flex h-16 w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl px-5 text-lg leading-normal font-bold tracking-[0.015em] text-white shadow-lg transition-transform active:scale-[0.98]"
			>
				<span class="truncate">Back to Dashboard</span>
			</button>
		</div>
	</div>
</div>

<style>
	.rgb-aura {
		background: conic-gradient(
			from 0deg,
			#ff0000,
			#ff7f00,
			#ffff00,
			#00ff00,
			#0000ff,
			#4b0082,
			#8b00ff,
			#ff0000
		);
		filter: blur(24px);
		opacity: 0.4;
		animation: auraFloat 20s linear infinite;
	}

	@keyframes auraFloat {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
