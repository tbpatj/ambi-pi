<script lang="ts">
	import BreadCrumb from '$lib/components/layout/BreadCrumb.svelte';
	import DotProgress from '$lib/components/layout/DotProgress.svelte';
	import DeviceSearchSection from '$lib/components/pages/add-device/DeviceSearchSection.svelte';
	import LedCountSection from '$lib/components/pages/add-device/LedCountSection.svelte';
	import LedSuccessSection from '$lib/components/pages/add-device/LedSuccessSection.svelte';
	import PinConfigSection from '$lib/components/pages/add-device/PinConfigSection.svelte';
	let step = $state(2);

	let sections = [
		{ title: 'Device Search', completed: false },
		{ title: 'Pin Configuration', completed: false }
	];

	let connectedIp = $state('');
	let ledType = $state('');
	let dataPin = $state<number | null>(null);
	let ledCount = $state<number | null>(null);

	const handleBack = () => {
		if (step > 1) {
			step -= 1;
		} else {
			// Navigate back to previous page or home
			window.history.back();
		}
	};
</script>

<div
	class="bg-background-light dark:bg-background-dark group/design-root relative mx-auto flex h-screen w-full max-w-md flex-col"
>
	<!-- TopAppBar -->
	<BreadCrumb onBack={handleBack} title={sections?.[step - 1]?.title} />
	<DotProgress currentStep={step} totalSteps={3} />
	<!-- ProgressBar -->
	{#if step === 1}
		<DeviceSearchSection
			{connectedIp}
			onConnected={(ip: string) => {
				// Handle device connected, proceed to next step
				connectedIp = ip;
				step = 2;
			}}
		/>
	{:else if step === 2}
		<!-- Pin Configuration Section Placeholder -->
		<PinConfigSection
			initialPin={dataPin ?? undefined}
			initialType={ledType ?? undefined}
			onSubmit={(type, pin) => {
				ledType = type;
				dataPin = pin;
				step = 3;
			}}
		/>
	{:else if step === 3}
		<LedCountSection
			pin={dataPin ?? 0}
			ip={connectedIp}
			initialLedCount={ledCount ?? undefined}
			onSubmit={(count: number) => {
				ledCount = count;
				step = 4;
			}}
			onFinish={(count: number) => {
				ledCount = count;
				step = 5;
			}}
		/>
	{:else if step === 4}{:else if step === 5}
		<LedSuccessSection />{/if}
</div>
