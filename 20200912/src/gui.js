const setPane = (pane, params) => {
	pane.addButton({
		title: 'frame',
	});
	pane.addInput(params, 'flagCount');
	pane.addButton({
		title: 'sound',
	});
};

const adjustPos = (paneId, params) => {
	paneId.style.left = params.margin.x + 'px';
	paneId.style.top = params.margin.y * 0.2 + 'px';
};

const gui = (pane, paneId, params) => {
	adjustPos(paneId, params);
	setPane(pane, params);
};

export default gui;

