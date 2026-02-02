<div
	class="relative mx-auto flex min-h-screen w-full max-w-[480px] flex-col overflow-x-hidden border-x border-gray-800/20 shadow-2xl"
>
	<div
		class="bg-background-light dark:bg-background-dark sticky top-0 z-50 flex items-center justify-between p-4 pb-2"
	>
		<div class="flex size-12 shrink-0 items-center text-gray-900 dark:text-white">
			<span class="material-symbols-outlined cursor-pointer">arrow_back_ios</span>
		</div>
		<div class="flex flex-1 flex-col items-center">
			<h2 class="text-lg leading-tight font-bold tracking-tight text-gray-900 dark:text-white">
				Living Room TV
			</h2>
			<span class="text-primary text-[10px] font-bold tracking-widest uppercase"
				>Connected • 240 LEDs</span
			>
		</div>
		<div class="flex w-12 items-center justify-end">
			<button
				class="flex h-12 cursor-pointer items-center justify-center rounded-lg bg-transparent p-0 text-gray-900 dark:text-white"
			>
				<span class="material-symbols-outlined">settings</span>
			</button>
		</div>
	</div>
	<div class="flex flex-col items-center gap-8 px-4 py-6">
		<div class="group relative">
			<div
				class="bg-primary/20 group-hover:bg-primary/30 absolute -inset-4 rounded-full blur-2xl transition-all"
			></div>
			<button
				class="border-primary bg-background-dark relative flex size-32 items-center justify-center rounded-full border-4 shadow-[0_0_30px_rgba(19,91,236,0.5)]"
			>
				<span class="material-symbols-outlined text-primary text-5xl font-bold"
					>power_settings_new</span
				>
			</button>
		</div>
		<div class="@container w-full">
			<div
				class="relative flex w-full flex-col items-start justify-between gap-3 rounded-2xl border border-gray-100 bg-white/5 p-4 dark:border-white/10 dark:bg-white/5"
			>
				<div class="flex w-full shrink-[3] items-center justify-between">
					<div class="flex items-center gap-2">
						<span class="material-symbols-outlined text-primary">light_mode</span>
						<p class="text-base leading-normal font-medium text-gray-900 dark:text-white">
							Brightness
						</p>
					</div>
					<p class="text-primary text-sm leading-normal font-bold">85%</p>
				</div>
				<div class="flex h-6 w-full items-center gap-4">
					<div class="flex h-2 flex-1 overflow-hidden rounded-full bg-gray-200 dark:bg-[#324467]">
						<div class="bg-primary glow-primary h-full w-[85%] rounded-full"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div>
		<h2
			class="px-4 pt-5 pb-3 text-[22px] leading-tight font-bold tracking-[-0.015em] text-gray-900 dark:text-white"
		>
			Sync Mode
		</h2>
		<div class="@container px-4 pb-2">
			<div
				class="border-primary/30 bg-primary/5 flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border p-5 @[480px]:flex-row @[480px]:items-center"
			>
				<div class="flex flex-col gap-1">
					<div class="flex items-center gap-2">
						<span class="material-symbols-outlined text-primary">sync</span>
						<p class="text-base leading-tight font-bold text-gray-900 dark:text-white">
							Sync with TV Content
						</p>
					</div>
					<p class="text-sm leading-normal font-normal text-gray-500 dark:text-[#92a4c9]">
						Low-latency Ambi-light mode (HDMI/Camera)
					</p>
				</div>
				<label
					class="has-[:checked]:bg-primary relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-gray-300 p-0.5 transition-all has-[:checked]:justify-end dark:bg-[#232f48]"
				>
					<div class="h-full w-[27px] rounded-full bg-white shadow-lg"></div>
					<input checked={true} class="invisible absolute" type="checkbox" />
				</label>
			</div>
		</div>
		<div class="px-4">
			<button
				class="bg-primary hover:bg-primary/90 flex w-full items-center justify-between rounded-xl p-4 text-white shadow-lg transition-all active:scale-[0.98]"
			>
				<div class="flex items-center gap-3">
					<div class="relative">
						<span class="material-symbols-outlined text-3xl">tv</span>
						<span
							class="material-symbols-outlined bg-primary border-primary absolute -right-1 -bottom-1 rounded-full border-2 p-0.5 text-[16px] leading-none"
							>settings</span
						>
					</div>
					<div class="text-left">
						<p class="text-sm leading-none font-bold">Calibrate TV Screen</p>
						<p class="mt-1 text-[11px] font-semibold tracking-wider uppercase opacity-80">
							Required for Sync Mode
						</p>
					</div>
				</div>
				<span class="material-symbols-outlined">chevron_right</span>
			</button>
		</div>
	</div>
	<div class="flex flex-col">
		<h2
			class="px-4 pt-5 pb-3 text-[22px] leading-tight font-bold tracking-[-0.015em] text-gray-900 dark:text-white"
		>
			Animations
		</h2>
		<div class="custom-scrollbar flex gap-4 overflow-x-auto px-4 pb-4">
			<div
				class="group flex h-40 w-32 flex-shrink-0 cursor-pointer flex-col items-center justify-between rounded-xl border border-gray-100 bg-white p-3 dark:border-white/10 dark:bg-white/5"
			>
				<div
					class="glow-rainbow h-20 w-full rounded-lg opacity-80 shadow-lg transition-opacity group-hover:opacity-100"
				></div>
				<p class="mt-2 text-sm font-bold text-gray-900 dark:text-white">Rainbow</p>
				<span class="text-primary text-[10px] font-bold uppercase">Active</span>
			</div>
			<div
				class="flex h-40 w-32 flex-shrink-0 cursor-pointer flex-col items-center justify-between rounded-xl border border-gray-100 bg-white p-3 dark:border-white/10 dark:bg-white/5"
			>
				<div
					class="flex h-20 w-full items-center justify-center rounded-lg bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
				>
					<span class="material-symbols-outlined text-3xl text-white">favorite</span>
				</div>
				<p class="mt-2 text-sm font-bold text-gray-900 dark:text-white">Pulse</p>
				<span class="text-[10px] font-bold text-gray-500 uppercase">Preset</span>
			</div>
			<div
				class="flex h-40 w-32 flex-shrink-0 cursor-pointer flex-col items-center justify-between rounded-xl border border-gray-100 bg-white p-3 dark:border-white/10 dark:bg-white/5"
			>
				<div
					class="flex h-20 w-full items-center justify-center rounded-lg bg-gradient-to-t from-red-600 to-orange-400 shadow-[0_0_15px_rgba(239,68,68,0.5)]"
				>
					<span class="material-symbols-outlined text-3xl text-white">local_fire_department</span>
				</div>
				<p class="mt-2 text-sm font-bold text-gray-900 dark:text-white">Fire</p>
				<span class="text-[10px] font-bold text-gray-500 uppercase">Preset</span>
			</div>
			<div
				class="flex h-40 w-32 flex-shrink-0 cursor-pointer flex-col items-center justify-between rounded-xl border border-gray-100 bg-white p-3 dark:border-white/10 dark:bg-white/5"
			>
				<div class="flex h-20 w-full items-center justify-center rounded-lg bg-white/20">
					<span class="material-symbols-outlined text-3xl text-white">wb_sunny</span>
				</div>
				<p class="mt-2 text-sm font-bold text-gray-900 dark:text-white">Static Glow</p>
				<span class="text-[10px] font-bold text-gray-500 uppercase">Custom</span>
			</div>
		</div>
	</div>
	<div class="mb-10">
		<h2
			class="px-4 pt-5 pb-3 text-[22px] leading-tight font-bold tracking-[-0.015em] text-gray-900 dark:text-white"
		>
			No Video Input Behavior
		</h2>
		<div class="flex flex-col gap-4 px-4">
			<div class="flex flex-col gap-1.5">
				<label class="px-1 text-sm font-medium text-gray-500 dark:text-gray-400"
					>Fallback Animation</label
				>
				<div class="relative">
					<select
						class="focus:ring-primary w-full appearance-none rounded-xl border border-gray-100 bg-white px-4 py-3 text-gray-900 focus:border-transparent focus:ring-2 dark:border-white/10 dark:bg-white/5 dark:text-white"
					>
						<option>Static Glow</option>
						<option>Breathing</option>
						<option>Off</option>
						<option>Last Animation</option>
					</select>
					<span
						class="material-symbols-outlined pointer-events-none absolute top-3 right-4 text-gray-400"
						>expand_more</span
					>
				</div>
			</div>
			<div class="flex flex-col gap-1.5">
				<label class="px-1 text-sm font-medium text-gray-500 dark:text-gray-400"
					>Auto-off Timer</label
				>
				<div class="relative">
					<select
						class="focus:ring-primary w-full appearance-none rounded-xl border border-gray-100 bg-white px-4 py-3 text-gray-900 focus:border-transparent focus:ring-2 dark:border-white/10 dark:bg-white/5 dark:text-white"
					>
						<option>Never</option>
						<option>15 mins</option>
						<option>30 mins</option>
						<option>1 hour</option>
						<option>2 hours</option>
					</select>
					<span
						class="material-symbols-outlined pointer-events-none absolute top-3 right-4 text-gray-400"
						>schedule</span
					>
				</div>
			</div>
		</div>
	</div>
	<div class="h-10"></div>
</div>

<style>
	.glow-primary {
		box-shadow: 0 0 20px rgba(19, 91, 236, 0.4);
	}
	.glow-rainbow {
		background: linear-gradient(
			90deg,
			#ff0000,
			#ff7f00,
			#ffff00,
			#00ff00,
			#0000ff,
			#4b0082,
			#8b00ff
		);
	}
	.custom-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.custom-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
