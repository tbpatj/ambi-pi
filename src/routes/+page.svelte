<script lang="ts">
	import { goto } from '$app/navigation';
	import LedDeviceCard from '$lib/components/cards/LedDeviceCard.svelte';
	import Button from '$lib/components/input/Button.svelte';
	import NoDeviceFoundSection from '$lib/components/pages/add-device/dashboard/NoDeviceFoundSection.svelte';
	import { deviceStore } from '$lib/stores/deviceStore';

	let deviceIds = Object.keys($deviceStore.ledDevices);
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
			{#if deviceIds.length > 0}
				{#each deviceIds as deviceId}
					{@const device = $deviceStore.ledDevices[deviceId]}
					<LedDeviceCard
						id={deviceId}
						deviceName={device.name}
						icon={device.icon ?? 'devices'}
						powered={device.powered}
						connected={device.connected}
					/>
				{/each}
			{:else}
				<!-- Friendly Illustration of a TV with Glow -->
				<NoDeviceFoundSection />
			{/if}
			<!-- Primary Action Button -->
			<Button onclick={() => goto('/add-device')} icon="add_circle">Add New Device</Button>
		</div>
	</main>
	<!-- BottomNavBar -->
	<!-- Safe area for iOS devices -->
	<div class="bg-background-light dark:bg-background-dark/90 h-2"></div>
</div>
