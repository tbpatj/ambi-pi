<script lang="ts">
	import type { Snippet } from 'svelte';
	import { slide } from 'svelte/transition';

	interface Props {
		label?: string;
		subtext?: string;
		children: Snippet;
		error?: string;
		collapsable?: boolean;
	}

	let { label, subtext, children, error, collapsable }: Props = $props();

	let collapsed = $state(collapsable ? true : false);
</script>

<div class="flex flex-col gap-2">
	{#if collapsable}
		<button
			onclick={() => (collapsed = !collapsed)}
			type="button"
			class="flex w-full items-center justify-between gap-2 px-1 py-0.5"
		>
			<span class="text-sm font-semibold text-slate-900 dark:text-white">{label}</span>
			<span
				class="material-symbols-outlined text-primary pointer-events-none transition-transform duration-200 {collapsed
					? 'rotate-180'
					: ''}">expand_more</span
			>
		</button>
	{:else if label}
		<label class="px-1 text-sm font-semibold text-slate-900 dark:text-white">{label}</label>
	{/if}
	{#if !collapsed || !collapsable}
		<div transition:slide={{ duration: 200 }} class="flex flex-col gap-1">
			{@render children()}
			{#if error}
				<p class="px-1 text-sm font-medium text-red-600 dark:text-red-400">{error}</p>
			{:else if subtext}
				<p class="px-1 text-xs text-slate-500 italic dark:text-slate-400">{subtext}</p>
			{/if}
		</div>
	{/if}
</div>
