<script lang="ts">
	interface Props {
		message?: string;
		icon?: string;
		type?: 'info' | 'warning' | 'success' | 'error';
		dismissible?: boolean;
	}

	let {
		message = "Check if the Pi's red power LED is solid.",
		icon = 'info',
		type = 'info',
		dismissible = false
	}: Props = $props();

	let isVisible = $state(true);

	const typeStyles = {
		info: 'bg-primary/10 border-primary/20',
		warning: 'bg-yellow-500/10 border-yellow-500/20',
		success: 'bg-green-500/10 border-green-500/20',
		error: 'bg-red-500/10 border-red-500/20'
	};

	const iconColors = {
		info: 'text-primary',
		warning: 'text-yellow-500',
		success: 'text-green-500',
		error: 'text-red-500'
	};

	const handleDismiss = () => {
		isVisible = false;
	};
</script>

{#if isVisible}
	<div class="flex w-full items-center gap-2 rounded-xl border px-4 py-3 {typeStyles[type]}">
		<span class="material-symbols-outlined text-sm {iconColors[type]}">
			{icon}
		</span>
		<p class="flex-1 text-xs text-slate-300">
			{message}
		</p>
		{#if dismissible}
			<button
				type="button"
				onclick={handleDismiss}
				class="ml-2 transition-opacity hover:opacity-70"
				aria-label="Dismiss"
			>
				<span class="material-symbols-outlined text-sm text-slate-400">close</span>
			</button>
		{/if}
	</div>
{/if}
