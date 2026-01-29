<script lang="ts">
	interface Props {
		label?: string;
		type?: string;
		placeholder?: string;
		value?: string | number;
		icon?: string;
		regex?: RegExp;
		disabled?: boolean;
		required?: boolean;
		onchange?: (value: string | number) => void;
		oninput?: (value: string | number) => void;
		error?: string;
	}

	let {
		label,
		type = 'text',
		placeholder,
		value = '',
		icon,
		regex,
		disabled = false,
		required = false,
		onchange,
		oninput,
		error
	}: Props = $props();

	let isValid = $state(true);

	const handleInput = (e: Event) => {
		const target = e.target as HTMLInputElement;
		const newValue = type === 'number' ? parseFloat(target.value) : target.value;

		if (regex && target.value) {
			isValid = regex.test(target.value);
		} else {
			isValid = true;
		}

		value = newValue;
		oninput?.(newValue);
	};

	const handleChange = (e: Event) => {
		const target = e.target as HTMLInputElement;
		const newValue = type === 'number' ? parseFloat(target.value) : target.value;
		onchange?.(newValue);
	};
</script>

{#if label}
	<label class="px-1 text-sm font-semibold text-slate-900 dark:text-white">
		{label}
		{#if required}
			<span class="text-red-500">*</span>
		{/if}
	</label>
{/if}
<div class="relative">
	<input
		{type}
		{value}
		{placeholder}
		{disabled}
		{required}
		oninput={handleInput}
		onchange={handleChange}
		class="focus:ring-primary w-full rounded-xl border px-4 py-4 text-slate-900 transition-all outline-none placeholder:text-slate-400 focus:border-transparent focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-600 [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden {isValid
			? 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 dark:text-white'
			: 'border-red-500 bg-red-50 text-red-900 dark:border-red-600 dark:bg-red-900/20 dark:text-red-400'} {icon
			? 'pr-12'
			: ''}"
	/>
	{#if icon}
		<span
			class="material-symbols-outlined text-primary pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 select-none"
		>
			{icon}
		</span>
	{/if}
</div>
{#if error}
	<p class="px-1 text-sm font-medium text-red-600 dark:text-red-400">{error}</p>
{:else if !isValid && regex}
	<p class="px-1 text-sm font-medium text-amber-600 dark:text-amber-400">Invalid format</p>
{/if}
