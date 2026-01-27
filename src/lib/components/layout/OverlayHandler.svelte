<script lang="ts">
	import { overlayStore } from '$lib/stores/overlayStore';
</script>

{#each $overlayStore.overlays as overlay (overlay.id)}
	{@const Component = overlay.element}
	<section role="dialog" style="z-index: {overlay.zIndex};position:relative;">
		<Component {...overlay.props} overlayId={overlay.id}>
			{#if overlay.children}
				{@render overlay.children()}
			{/if}
		</Component>
	</section>
{/each}
