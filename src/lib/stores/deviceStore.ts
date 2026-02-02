import type { LEDDevice } from '$lib/types/ledDevice';
import { writable } from 'svelte/store';

interface DeviceStore {
	devices: string[];
	ledDevices: { [id: string]: LEDDevice };
}

export const deviceStore = writable<DeviceStore>({
	devices: [],
	ledDevices: {}
});
