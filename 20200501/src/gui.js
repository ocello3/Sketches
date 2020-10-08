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
	paneId.style.left = params.marginVec.x + 'px';
	paneId.style.top = params.marginVec.y * 0.2 + 'px';
};

const gui = (pane, paneId, params) => {
	adjustPos(paneId, params);
	setPane(pane, params);
};

export default gui;

