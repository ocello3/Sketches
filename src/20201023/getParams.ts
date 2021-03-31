export interface params {
	canvasSize: number;
}

export const getParams = (width: number): params => {
	const params: params = {
		canvasSize: width,
	}
	return params;
};

