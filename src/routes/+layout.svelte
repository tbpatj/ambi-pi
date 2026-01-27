<script lang="ts">
	import '../app.css';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import OverlayHandler from '$lib/components/layout/OverlayHandler.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
		rel="stylesheet"
	/>
	<link rel="icon" href={favicon} />
</svelte:head>
<OverlayHandler />
{@render children()}

<!-- <nav
	class="bg-background-light dark:bg-background-dark/90 ios-blur fixed bottom-1 left-0 flex w-full gap-2 border-t border-slate-200 px-6 pt-3 pb-8 dark:border-slate-800"
>
	<a class="text-primary flex flex-1 flex-col items-center justify-center gap-1" href="#">
		<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">home</span>
		<p class="text-[10px] font-bold tracking-widest uppercase">Home</p>
	</a>
	<a
		class="hover:text-primary flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 transition-colors dark:text-slate-500"
		href="#"
	>
		<span class="material-symbols-outlined">auto_awesome</span>
		<p class="text-[10px] font-bold tracking-widest uppercase">Scenes</p>
	</a>
	<a
		class="hover:text-primary flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 transition-colors dark:text-slate-500"
		href="#"
	>
		<span class="material-symbols-outlined">analytics</span>
		<p class="text-[10px] font-bold tracking-widest uppercase">Activity</p>
	</a>
	<a
		class="hover:text-primary flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 transition-colors dark:text-slate-500"
		href="#"
	>
		<span class="material-symbols-outlined">person</span>
		<p class="text-[10px] font-bold tracking-widest uppercase">Profile</p>
	</a>
</nav> -->
