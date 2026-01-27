<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { closeOverlay } from '$lib/stores/overlayStore';

	interface Props {
		children: Snippet;
		id?: string;
		overlayStoreId?: string;
		overflow?: 'hidden' | 'visible';
		closed?: boolean;
		noClose?: boolean;
		onClose?: () => void;
	}

	let {
		children,
		id,
		overflow = 'visible',
		overlayStoreId,
		onClose,
		noClose,
		closed
	}: Props = $props();

	const renderChildren = $derived(typeof children === 'function' ? children : null);
	let isOpen = $state(false);
	let mounted = $state(false);
	let pointerDownOnBackground = $state(false);

	const handleClose = () => {
		isOpen = false;
		setTimeout(() => {
			onClose?.();
			if (overlayStoreId) closeOverlay(overlayStoreId);
		}, 300);
	};

	const handleKeydown = (event: KeyboardEvent) => {
		if (noClose) return;
		if (!mounted) return;
		if (event.key === 'Escape') {
			handleClose();
		}
	};

	function handleBackgroundPointerDown(e: PointerEvent) {
		pointerDownOnBackground = e.target === e.currentTarget;
	}

	const handleBackgroundClick = (event: MouseEvent) => {
		if (noClose) return;
		if (!mounted) return;
		if (!pointerDownOnBackground) return;
		if (event.target === event.currentTarget) {
			handleClose();
		}
	};

	$effect(() => {
		if (closed) {
			handleClose();
		}
	});

	onMount(() => {
		requestAnimationFrame(() => {
			isOpen = true;
			mounted = true;
		});
	});
</script>

<svelte:window on:keydown={handleKeydown} />

<div
	class={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 transition-[opacity,backdrop-filter] duration-300 ${
		isOpen ? 'opacity-100 backdrop-blur-sm' : 'opacity-0 backdrop-blur-none'
	}`}
	role="button"
	tabindex="0"
	onpointerdown={handleBackgroundPointerDown}
	onclick={handleBackgroundClick}
	onkeydown={(e) => e.key === 'Enter' && !noClose && mounted && handleClose()}
>
	<div
		{id}
		class={`relative inline-block max-h-[82vh] max-w-[92vw] ${
			overflow === 'hidden' ? 'overflow-hidden' : 'overflow-visible'
		} rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all duration-300
        dark:border-slate-800 dark:bg-slate-900 ${
					isOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-1 scale-95 opacity-0'
				}`}
		role="dialog"
		aria-modal="true"
	>
		{#if !noClose}
			<button
				onclick={handleClose}
				class="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow transition
                    hover:bg-slate-50 active:scale-95 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
				aria-label="Close modal"
			>
				<span class="material-symbols-outlined text-xl">close</span>
			</button>
		{/if}
		<div class="p-6">
			{#if renderChildren}
				{@render renderChildren()}
			{/if}
		</div>
	</div>
</div>
