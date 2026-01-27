<script>
	import InfoTip from '$lib/components/layout/InfoTip.svelte';
	import Modal from '$lib/components/layout/Modal.svelte';
	import WifiVisual from '$lib/components/visual/WifiVisual.svelte';
	import { closeOverlay, openOverlay } from '$lib/stores/overlayStore';

	let manualIpValue = $state('');
	let manualIpError = $state('');

	const ipv4Regex =
		/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/;

	function submitManualIp() {
		manualIpError = '';
		const ip = manualIpValue.trim();
		if (!ip || !ipv4Regex.test(ip)) {
			manualIpError = 'Enter a valid IPv4 address (e.g., 192.168.1.42).';
			return;
		}
		// TODO: send ip to your connect flow
		closeOverlay();
	}
</script>

<!-- Content Area -->
<div class="flex flex-1 flex-col items-center justify-center px-6">
	<!-- Radar Visualizer -->
	<WifiVisual />
	<!-- HeadlineText -->
	<h2 class="pb-3 text-center text-[26px] leading-tight font-bold tracking-tight text-white">
		Searching for your Pi-Light controller...
	</h2>
	<!-- BodyText -->
	<p class="max-w-[280px] text-center text-base leading-relaxed font-normal text-slate-400">
		Ensure your Raspberry Pi is powered on and connected to the same network.
	</p>
</div>
<!-- Bottom Actions / Tip -->
<div class="flex shrink-0 flex-col items-center gap-4 p-6">
	<InfoTip message="Tip: Check if the Pi's red power LED is solid." />
	{#snippet manualIp()}
		<div
			class="flex max-w-full min-w-[260px] flex-col gap-3 text-left text-slate-900 dark:text-slate-100"
		>
			<h3 class="text-lg font-semibold text-slate-900 dark:text-white">Enter IP manually</h3>
			<p class="text-sm text-slate-500 dark:text-slate-400">
				We'll try to reach your Pi-Light at this address.
			</p>
			<label class="flex flex-col gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
				<span>IP address</span>
				<input
					type="text"
					bind:value={manualIpValue}
					placeholder="192.168.1.42"
					class="ring-primary/30 focus:border-primary w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 transition outline-none focus:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
				/>
			</label>
			{#if manualIpError}
				<p class="text-sm font-medium text-amber-600 dark:text-amber-400">{manualIpError}</p>
			{/if}
			<div class="mt-1 flex justify-end gap-2">
				<button
					type="button"
					onclick={() => closeOverlay()}
					class="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
				>
					Cancel
				</button>
				<button
					type="button"
					onclick={submitManualIp}
					class="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 py-2 text-sm font-semibold transition"
				>
					Connect
				</button>
			</div>
		</div>
	{/snippet}
	<button
		onclick={() => {
			openOverlay(Modal, { children: manualIp });
		}}
		class="text-primary hover:bg-primary/5 rounded-lg px-4 py-2 text-sm font-semibold transition-colors"
	>
		Enter IP Manually
	</button>
</div>
<!-- Success Overlay (Hidden State Example) -->
<!-- In a real app, this would swap based on connection state -->
<div
	class="bg-background-dark/95 absolute inset-0 z-50 flex hidden flex-col items-center justify-center p-6 text-center"
>
	<div
		class="mb-6 flex size-24 items-center justify-center rounded-full border-2 border-green-500 bg-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
	>
		<span class="material-symbols-outlined text-5xl font-bold text-green-500">check</span>
	</div>
	<h2 class="mb-2 text-[32px] font-bold text-white">Connected!</h2>
	<p class="mb-10 text-slate-400">We found your Pi-Light on 192.168.1.42</p>
	<button class="bg-primary w-full rounded-xl py-4 text-lg font-bold">Continue to Setup</button>
</div>
<div class="h-8 shrink-0 bg-transparent"></div>
