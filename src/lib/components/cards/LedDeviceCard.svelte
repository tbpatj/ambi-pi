<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '../input/Button.svelte';
	import ConnectionStatus from '../layout/indicators/ConnectionStatus.svelte';

	interface LedDeviceCardProps {
		id: string;
		connected: boolean;
		deviceName: string;
		effectName?: string;
		powered: boolean;
		icon: string;
		// Define any props if needed in the future
	}
	let { id, connected, deviceName, effectName, powered, icon }: LedDeviceCardProps = $props();
</script>

<button
	onclick={() => {
		goto(`/device/${id}`);
	}}
	class="border-primary/20 w-full cursor-pointer overflow-hidden rounded-xl border bg-[#192233] shadow-xl transition-shadow hover:shadow-2xl"
>
	<div
		class="relative flex h-40 w-full items-center justify-center overflow-hidden"
		data-alt="Vibrant rainbow mesh gradient representing LED effect"
	>
		{#if powered}
			<div class="rainbow-mesh-1 absolute inset-0"></div>
			<div class="rainbow-mesh-2 absolute inset-0"></div>
		{:else}
			<div class="absolute inset-0 bg-black/20"></div>
		{/if}
		<span class="material-symbols-outlined relative text-5xl text-white opacity-80">{icon}</span>
	</div>
	<div class="space-y-4 p-5">
		<div class="flex items-start justify-between">
			<div>
				<ConnectionStatus connected={connected ? 'connected' : 'disconnected'} />
				<h2 class="text-xl font-bold">{deviceName}</h2>
				{#if effectName}
					<p class="text-primary text-sm font-medium">Effect: {effectName}</p>
				{/if}
			</div>
			<Button
				onclick={(e) => {
					e?.preventDefault();
					e?.stopPropagation();
				}}
				fullWidth={false}
				size="sm">Power</Button
			>
		</div>
	</div>
</button>

<style>
	.neon-glow-primary {
		box-shadow: 0 0 15px rgba(19, 91, 236, 0.4);
	}

	@keyframes mesh-move-1 {
		0%,
		100% {
			background-position:
				0% 0%,
				50% 0%,
				100% 0%,
				0% 100%,
				50% 100%,
				100% 100%;
		}
		50% {
			background-position:
				100% 100%,
				50% 100%,
				0% 100%,
				100% 0%,
				50% 0%,
				0% 0%;
		}
	}

	@keyframes mesh-move-2 {
		0%,
		100% {
			background-position:
				100% 0%,
				0% 50%,
				100% 100%,
				0% 0%,
				100% 50%,
				0% 100%;
		}
		50% {
			background-position:
				0% 100%,
				100% 50%,
				0% 0%,
				100% 100%,
				0% 50%,
				100% 0%;
		}
	}

	.rainbow-mesh-1 {
		background-image:
			radial-gradient(at 0% 0%, hsla(253, 16%, 7%, 1) 0, transparent 40%),
			radial-gradient(at 100% 0%, hsla(339, 49%, 30%, 1) 0, transparent 45%),
			radial-gradient(at 0% 100%, hsla(197, 49%, 30%, 1) 0, transparent 40%),
			radial-gradient(at 100% 100%, hsla(10, 49%, 30%, 1) 0, transparent 45%);
		background-size: 200% 200%;
		animation: mesh-move-1 20s ease-in-out infinite;
		opacity: 0.8;
	}

	.rainbow-mesh-2 {
		background-image:
			radial-gradient(at 50% 0%, hsla(225, 39%, 30%, 1) 0, transparent 35%),
			radial-gradient(at 50% 100%, hsla(280, 49%, 30%, 1) 0, transparent 40%),
			radial-gradient(at 0% 50%, hsla(197, 49%, 30%, 1) 0, transparent 35%);
		background-size: 200% 200%;
		animation: mesh-move-2 15s ease-in-out infinite reverse;
		opacity: 0.7;
	}

	.warm-mesh {
		background-image: radial-gradient(at 50% 50%, #fcd34d 0%, #78350f 100%);
		opacity: 0.6;
	}
</style>
