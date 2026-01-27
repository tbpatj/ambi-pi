<script>
	import BreadCrumb from '$lib/components/layout/BreadCrumb.svelte';
	import DotProgress from '$lib/components/layout/DotProgress.svelte';
	import DeviceSearchSection from '$lib/components/pages/add-device/DeviceSearchSection.svelte';
	let step = $state(1);

	let sections = [
		{ title: 'Device Search', completed: false, component: DeviceSearchSection },
		{ title: 'Pin Configuration', completed: false }
	];

	const handleBack = () => {
		if (step > 1) {
			step -= 1;
		} else {
			// Navigate back to previous page or home
			window.history.back();
		}
	};

	let Section = sections?.[step - 1]?.component;
</script>

<div
	class="bg-background-light dark:bg-background-dark group/design-root relative mx-auto flex h-screen w-full max-w-md flex-col overflow-hidden"
>
	<!-- TopAppBar -->
	<BreadCrumb onBack={handleBack} title={sections?.[step - 1]?.title} />
	<DotProgress currentStep={step} totalSteps={3} />
	<!-- ProgressBar -->

	{#if Section}
		<svelte:component this={Section} />
	{/if}
</div>
