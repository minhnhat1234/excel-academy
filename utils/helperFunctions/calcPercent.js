export function calcPercent(desiredSize, currentScreenSize) {
	let percentage = (parseInt(desiredSize) / parseInt(currentScreenSize)) * 100;
	return `${percentage.toString()}%`;
}
