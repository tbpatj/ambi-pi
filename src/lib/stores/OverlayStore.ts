import { type Component, type Snippet } from 'svelte';
import { writable } from 'svelte/store';

interface OverlayItem {
	id: string;
	locked?: boolean; // only can be closed by using closeOverlay with the id
	element: Component<any> | Snippet;
	children?: Snippet;
	props?: any;
	zIndex?: number;
	onClose?: (props: any) => void;
}

interface OverlayStore {
	overlays: OverlayItem[];
}

export const overlayStore = writable<OverlayStore>({
	overlays: []
});

let overlayIdCounter = 1;

export const openOverlay = (
	element: Component<any>,
	props?: any,
	locked?: boolean,
	overlayId?: string
) => {
	const id = overlayId ?? `${overlayIdCounter++}`;
	const children: undefined | Snippet = props?.children;
	if (children) delete props.children;
	props = { ...props, overlayStoreId: id };

	overlayStore.update((store) => {
		const zIndex = props?.zIndex || 100 + store.overlays.length;
		store.overlays.push({
			id,
			element,
			props,
			children,
			zIndex,
			locked: locked || false
		});
		return store;
	});

	return id;
};

export const addOverlayCloseListener = (id: string, callback: (props: any) => void) => {
	overlayStore.update((store) => {
		const overlay = store.overlays.find((overlay) => overlay.id === id);
		if (overlay) {
			overlay.props = { ...overlay.props, onClose: callback };
		}
		return store;
	});
};

export const closeOverlay = (id?: string | string[]) => {
	const type = typeof id;
	overlayStore.update((store) => {
		if (id) {
			store.overlays = store.overlays.filter((overlay) => {
				if (type === 'object') {
					return !id.includes(overlay.id);
				} else {
					if (overlay.id === id) {
						if (overlay.props?.onClose) {
							overlay.props.onClose();
						}
					}
					return overlay.id !== id;
				}
			});
		} else {
			store.overlays.pop();
		}
		return store;
	});
};

export const closeAllOverlays = () => {
	overlayStore.update((store) => {
		if (store.overlays.length === 0) return store;
		//run listeners for each overlay before closing
		for (let i = 0; i < store.overlays.length; i++) {
			const overlay = store.overlays[i];
			if (overlay.props?.onClose && !overlay.locked) {
				overlay.props.onClose();
			}
		}
		store.overlays = store.overlays.filter((overlay) => overlay.locked);
		return store;
	});
};

export const updateOverlayProps = (id: string, props: any) => {
	overlayStore.update((store) => {
		const storeItem = store.overlays.find((overlay) => overlay.id === id);
		if (storeItem) {
			storeItem.props = { ...storeItem.props, ...props };
		}
		return store;
	});
};
