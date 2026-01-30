<script lang="ts">
	interface SpinnerProps {
		color?: 'primary' | 'secondary' | 'light' | 'grey' | 'white' | 'main';
		width?: string;
		height?: string;
		lineWidth?: string;
	}

	let {
		color = 'primary',
		width = '32px',
		height = '32px',
		lineWidth = '3px'
	}: SpinnerProps = $props();
</script>

<span
	style="--width:{width};
--height: {height};--line-width: {lineWidth};"
	class={`spinner ${color}`}
/>

<style>
	.main {
		--color: var(--color-main);
	}

	.primary {
		--color: var(--color-primary);
	}

	.secondary {
		--color: var(--color-secondary);
	}

	.light {
		--color: var(--color-light);
	}

	.grey {
		--color: var(--color-grey);
	}

	.white {
		--color: var(--color-white);
	}

	.spinner {
		border: var(--line-width) solid var(--color);
		width: var(--width);
		height: var(--height);
		border-bottom-color: transparent;
		border-radius: 50%;
		display: inline-block;
		box-sizing: border-box;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
