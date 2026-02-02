<script lang="ts">
	import { type Snippet } from 'svelte';
	import Spinner from '../layout/loaders/Spinner.svelte';

	interface ButtonProps {
		children?: Snippet;
		icon?: string;
		disabled?: boolean;
		loading?: boolean;
		variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline';
		size?: 'sm' | 'md' | 'lg';
		fullWidth?: boolean;
		onclick?: (e?: MouseEvent) => void;
		type?: 'button' | 'submit' | 'reset';
		class?: string;
		[key: string]: any;
	}

	let {
		children,
		icon,
		disabled = false,
		loading = false,
		variant = 'primary',
		size = 'md',
		fullWidth = true,
		onclick,
		type = 'button',
		class: customClass = '',
		...rest
	}: ButtonProps = $props();

	const variantClasses = {
		primary: 'bg-primary hover:bg-blue-600 text-white shadow-lg shadow-primary/20',
		secondary:
			'bg-slate-200 hover:bg-slate-300 text-slate-900 dark:bg-[#232f48] dark:text-white dark:hover:bg-[#2d3b5a]',
		danger: 'bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/20',
		ghost: 'bg-transparent hover:bg-gray-100 text-gray-900',
		outline:
			'bg-transparent border-2 border-slate-200 text-slate-600 dark:border-slate-800 dark:text-slate-400'
	};

	const sizeClasses = {
		sm: 'px-3 py-2 text-sm',
		md: 'px-4 py-3 text-base',
		lg: 'px-6 py-4 text-lg font-bold'
	};

	const baseClasses =
		'flex items-center justify-center gap-2 rounded-xl transition-all duration-200 active:scale-[0.98] cursor-pointer disabled:cursor-not-allowed disabled:opacity-60';

	const disabledHoverClasses = {
		primary: 'disabled:hover:bg-primary',
		secondary: 'disabled:hover:bg-slate-200 dark:disabled:hover:bg-[#232f48]',
		danger: 'disabled:hover:bg-red-500',
		ghost: 'disabled:hover:bg-transparent',
		outline: 'disabled:hover:bg-transparent'
	};

	const widthClass = fullWidth ? 'w-full' : '';

	const buttonClasses = `${baseClasses} ${disabledHoverClasses[variant]} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${customClass}`;
</script>

<button {type} disabled={disabled || loading} {onclick} class={buttonClasses} {...rest}>
	{#if loading}
		<Spinner
			color={variant === 'secondary' ? 'primary' : 'white'}
			width="20px"
			height="20px"
			lineWidth="2px"
		/>
	{:else if icon}
		<span class="material-symbols-outlined text-sm">{icon}</span>
	{/if}
	{@render children?.()}
</button>

<style>
</style>
