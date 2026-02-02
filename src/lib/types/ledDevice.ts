export type LEDDeviceType = 'ws2812b' | 'ws2811' | 'sk6812' | 'apa102';
export interface LEDDevice {
	id: string;
	pin: number;
	ledCount: number;
	type: LEDDeviceType;
	icon?: string;
	name: string;
	powered: boolean;
	brightness: number;
	animation: null | LEDAnimation;
	connected: boolean;
}

export interface LEDAnimation {
	id: string;
	name: string;
	speed: number;
}
