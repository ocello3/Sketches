const gui = (props) => {
	const f1 = props.get('pane').addFolder({
		title: 'Control',
	});
	const stopButton = f1.addButton({
		title: 'start/stop',
	});
	stopButton.on('click', () => {
		s.isLooping() ? s.noLoop() : s.loop();
	});
}

export default gui;

