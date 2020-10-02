const setPane = (pane, params) => {
	const folder = pane.addFolder({
		expanded: true,
		title: 'circle',
	});
	folder.addInput(params, 'circleRadius', {
		min: 10,
		max: params.canvasSize,
	});
};

const adjustPos = (paneId, params) => {
	paneId.style.left = params.margin.x + 'px';
	paneId.style.top = params.margin.y + 'px';
};

const gui = (pane, paneId, params) => {
	adjustPos(paneId, params);
	setPane(pane, params);
};

export default gui;

