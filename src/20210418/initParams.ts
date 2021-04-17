export interface params {
	canvasSize: number;
	frameRate: number;
	isStarted: boolean;
	note_1: string;
	note_2: string;
}

export const initParams = (width: number):params => {
	
	const initParams: params = {
		canvasSize: width,
		frameRate: 0,
		isStarted: false,
		note_1: 'A0',
		note_2: 'A0',
	}

	return initParams;
};
