<script>
	import { goto } from '$app/navigation';
</script>

<div class="relative mx-auto flex h-screen w-full max-w-[430px] flex-col">
	<!-- TopAppBar -->
	<header
		class="bg-background-light/80 dark:bg-background-dark/80 ios-blur sticky top-0 z-10 flex items-center justify-between p-4"
	>
		<h2 class="flex-1 text-xl leading-tight font-bold tracking-tight">Home</h2>
		<div class="flex items-center justify-end">
			<button
				class="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-slate-200 dark:hover:bg-slate-800"
			>
				<span
					class="material-symbols-outlined text-slate-600 dark:text-white"
					style="font-size: 24px;">settings</span
				>
			</button>
		</div>
	</header>
	<!-- Main Content Area / Empty State -->
	<main class="flex flex-1 flex-col justify-center px-8 py-12">
		<div class="flex flex-col items-center gap-10">
			<!-- Friendly Illustration of a TV with Glow -->
			<div class="relative flex aspect-video w-full max-w-[280px] items-center justify-center">
				<!-- Glow effect behind the TV -->
				<div class="bg-primary/30 glow-aura absolute inset-4 rounded-full blur-3xl"></div>
				<!-- TV Body -->
				<div
					class="relative z-10 flex h-full w-full flex-col overflow-hidden rounded-xl border-[6px] border-slate-800 bg-slate-900 shadow-2xl dark:border-slate-700 dark:bg-slate-800"
				>
					<!-- Screen area with a subtle dark gradient -->
					<div
						class="relative flex flex-1 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900"
						data-alt="TV screen with ambient blue glow behind it"
					>
						<span
							class="material-symbols-outlined scale-[3] text-slate-600/30"
							style="font-variation-settings: 'FILL' 1">tv</span
						>
						<!-- Mock Ambi-Pi effect inside the screen edges -->
						<div class="border-primary/10 absolute inset-0 rounded-lg border-[10px]"></div>
					</div>
					<!-- TV Stand -->
				</div>
				<div
					class="absolute -bottom-4 left-1/2 h-2 w-20 -translate-x-1/2 rounded-full bg-slate-800 dark:bg-slate-700"
				></div>
			</div>
			<div class="flex flex-col items-center gap-4 text-center">
				<h1 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
					No devices found
				</h1>
				<p class="max-w-[280px] text-base leading-relaxed text-slate-500 dark:text-slate-400">
					Bring your TV to life by adding your first Ambi-Pi controller.
				</p>
			</div>
			<!-- Primary Action Button -->
			<button
				onclick={() => goto('/add-device')}
				class="group bg-primary shadow-primary/25 relative flex h-14 w-full max-w-[240px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-95"
			>
				<span class="material-symbols-outlined">add_circle</span>
				<span class="text-lg">Add New Device</span>
			</button>
		</div>
	</main>
	<!-- BottomNavBar -->
	<!-- Safe area for iOS devices -->
	<div class="bg-background-light dark:bg-background-dark/90 h-2"></div>
</div>
