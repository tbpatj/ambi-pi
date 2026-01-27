<div class="relative mb-12 flex h-64 w-64 items-center justify-center">
	<!-- Animated Outer Rings with Original Colors -->
	<div class="border-primary absolute inset-0 rounded-full border ring-1"></div>
	<div class="border-primary absolute inset-8 rounded-full border ring-2"></div>
	<div class="border-primary absolute inset-16 rounded-full border ring-3"></div>

	<!-- Central Icon / State -->
	<div
		class="bg-primary/20 border-primary glow-effect relative z-10 flex size-24 items-center justify-center rounded-full border"
	>
		<span class="material-symbols-outlined text-primary text-5xl">router</span>
	</div>

	<!-- Animated Radar Sweep Decoration -->
	<div class="ring-highlight border-primary absolute inset-0 rounded-full border-t-2"></div>
</div>

<style>
	@keyframes pulse-ring-outer {
		0%,
		100% {
			opacity: 0.1;
			transform: scale(1);
		}
		50% {
			opacity: 0.05;
			transform: scale(1.05);
		}
	}

	@keyframes pulse-ring-mid {
		0%,
		100% {
			opacity: 0.2;
			transform: scale(1);
		}
		50% {
			opacity: 0.08;
			transform: scale(1.05);
		}
	}

	@keyframes pulse-ring-inner {
		0%,
		100% {
			opacity: 0.4;
			transform: scale(1);
		}
		50% {
			opacity: 0.15;
			transform: scale(1.05);
		}
	}

	@keyframes pulse-highlight {
		0%,
		100% {
			opacity: 0.6;
			transform: rotate(45deg) scale(1);
		}
		50% {
			opacity: 0.3;
			transform: rotate(45deg) scale(1.05);
		}
	}

	.ring-1 {
		opacity: 0.1;
		transform: scale(1);
		animation: pulse-ring-outer 3s ease-in-out infinite;
	}

	.ring-2 {
		opacity: 0.2;
		transform: scale(1);
		animation: pulse-ring-mid 3s ease-in-out infinite 0.4s;
	}

	.ring-3 {
		opacity: 0.4;
		transform: scale(1);
		animation: pulse-ring-inner 3s ease-in-out infinite 0.8s;
	}

	.ring-highlight {
		opacity: 0.6;
		transform: rotate(45deg) scale(1);
		animation: pulse-highlight 3s ease-in-out infinite 0.2s;
	}
</style>
