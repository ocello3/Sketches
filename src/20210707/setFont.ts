
export const setFont = () => {
	return {
		cycle: 120,
		cycleCount: 0,
		refVal: 0,
		easeVal: 0,
		angle: 0,
	}
}

// const params = setParams(100);
const thisFont = setFont();
export type font = typeof thisFont;

