const gui = (props: any) => {
	const f1 = props.get('pane').addFolder({
		title: 'Control',
	});
	const stopButton = f1.addButton({
		title: 'start/stop',
	});
	stopButton.on('click', () => {
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 's'.
		s.isLooping() ? s.noLoop() : s.loop();
	});
}

export default gui;

