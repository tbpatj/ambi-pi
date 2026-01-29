<script lang="ts">
	interface Option {
		text: string;
		value: any;
	}

	interface Props {
		label?: string;
		options: Option[];
		value?: any;
		onchange?: (value: any) => void;
		disabled?: boolean;
	}

	let { label, options, value, onchange, disabled = false }: Props = $props();

	const handleChange = (e: Event) => {
		const target = e.target as HTMLSelectElement;
		const selectedOption = options.find((opt) => String(opt.value) === target.value);
		if (selectedOption) {
			value = selectedOption.value;
			onchange?.(selectedOption.value);
		}
	};
</script>

{#if label}
	<label class="px-1 text-sm font-semibold text-slate-900 dark:text-white">{label}</label>
{/if}
<div class="relative">
	<select
		{disabled}
		{value}
		onchange={handleChange}
		class="focus:ring-primary w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white px-4 py-4 text-slate-900 transition-all outline-none focus:border-transparent focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
	>
		{#each options as option (option.value)}
			<option {value} selected={value === option.value}>
				{option.text}
			</option>
		{/each}
	</select>
	<span
		class="material-symbols-outlined text-primary pointer-events-none absolute top-1/2 right-4 -translate-y-1/2"
		>expand_more</span
	>
</div>
