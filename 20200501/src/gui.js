const setPane = (pane, params) => {
	pane.addButton({
		title: 'frame',
	});
	pane.addInput(params, 'snakeCount');
	pane.addButton({
		title: 'sound',
	});
};

const adjustPos = (paneId, params) => {
	const marginWidth = (window.innerWidth - params.canvasSize) / 2;
	const marginHeight = (window.innerHeight - params.canvasSize) / 2;
	paneId.style.left = marginWidth + 'px';
	paneId.style.top = marginHeight * 0.2 + 'px';
};

const gui = (pane, paneId, params) => {
	adjustPos(paneId, params);
	setPane(pane, params);
};

export default gui;

