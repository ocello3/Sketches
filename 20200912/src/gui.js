const setPane = (pane, params) => {
	
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

