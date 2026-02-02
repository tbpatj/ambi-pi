<script lang="ts">
	interface Props {
		connected: 'connected' | 'disconnected' | 'pending' | 'unknown';
	}
	let { connected }: Props = $props();
</script>

{#if connected === 'connected'}
	<div class="mb-1 flex items-center gap-2">
		<span class="size-2 animate-pulse rounded-full bg-green-500"></span>
		<p class="text-xs font-medium tracking-wider text-[#92a4c9] uppercase">Connected</p>
	</div>
{:else if connected === 'disconnected'}
	<div class="mb-1 flex items-center gap-2">
		<span class="size-2 rounded-full bg-red-500"></span>
		<p class="text-xs font-medium tracking-wider text-[#92a4c9] uppercase">Disconnected</p>
	</div>
{:else if connected === 'pending'}
	<div class="mb-1 flex items-center gap-2">
		<span class="size-2 animate-pulse rounded-full bg-yellow-500"></span>
		<p class="text-xs font-medium tracking-wider text-[#92a4c9] uppercase">Connecting</p>
	</div>
{:else}
	<div class="mb-1 flex items-center gap-2">
		<span class="size-2 rounded-full bg-gray-500"></span>
		<p class="text-xs font-medium tracking-wider text-[#92a4c9] uppercase">Unknown</p>
	</div>
{/if}
