<script lang="ts">
	import Button from '$lib/components/input/Button.svelte';
	interface Props {
		ip: string;
		pin: number;
		initialLedCount?: number;
		onSubmit: (ledCount: number) => void;
	}

	let { ip, initialLedCount, onSubmit }: Props = $props();
	const handleNotTouch = () => {
		if (ledCount && ledCount > 0) {
			ledCount -= 1;
		}
	};

	const handleNone = () => {
		if (ledCount) {
			ledCount += 1;
		}
	};

	let ledRequestLoading = $state(false);
	let ledCount = $state<number | null>(initialLedCount ?? 20);
</script>

<div class="relative flex w-full flex-col overflow-x-hidden">
	<!-- Main Content Scrollable Area -->
	<div class="flex flex-1 flex-col justify-center px-4 py-8">
		<!-- HeadlineText -->
		<div class="mb-8">
			<h2
				class="font-display text-center text-[28px] leading-tight font-bold tracking-tight text-slate-900 dark:text-white"
			>
				Do you see a Blue LED right next to a White LED?
			</h2>
			<p class="mt-3 px-6 text-center text-sm text-slate-500 dark:text-slate-400">
				This helps your Raspberry Pi determine the orientation and density of your LED strip.
			</p>
		</div>
		<!-- Image/Visual Aid -->
		<div class="mb-10 flex justify-center">
			<div
				class="relative flex aspect-video w-full max-w-[320px] items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-xl dark:border-slate-700 dark:bg-slate-800"
			>
				<!-- Symbolic representation of LEDs -->
				<div class="flex gap-4">
					<div class="size-8 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
					<div class="bg-primary size-8 rounded-full shadow-[0_0_15px_rgba(19,91,236,0.8)]"></div>
				</div>
				<div
					class="absolute bottom-3 text-[10px] font-bold tracking-widest text-slate-400 uppercase"
				>
					Reference Preview
				</div>
			</div>
		</div>
		<!-- ButtonGroup -->
		<div class="flex w-full justify-center">
			<div class="flex max-w-[480px] flex-1 flex-col items-stretch gap-4">
				<!-- Primary Option -->
				<Button onclick={() => onSubmit(ledCount ?? 20)}>Yes, they are touching</Button>
				<Button onclick={handleNotTouch} variant="secondary">No, they apart</Button>
				<Button onclick={handleNone} variant="outline">I don't see a Blue LED</Button>
			</div>
		</div>
	</div>
	<!-- Footer Help -->
	<div class="flex items-center justify-center gap-2 p-6 text-slate-400">
		<span class="material-symbols-outlined text-lg">info</span>
		<span
			class="hover:text-primary cursor-pointer text-xs font-medium tracking-wider uppercase transition-colors"
			>How does indexing work?</span
		>
	</div>
	<!-- Bottom Spacer for iOS Home Indicator -->
	<div class="h-8 bg-transparent"></div>
</div>
