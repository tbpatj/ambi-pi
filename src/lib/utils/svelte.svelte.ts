import { untrack } from 'svelte';

export function explicitEffect(fn: () => any, deps: () => any[]) {
	$effect(() => {
		if (Array.isArray(deps)) {
			deps;
		} else {
			deps();
		}
		untrack(fn);
	});
}
