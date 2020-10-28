export class TimeObject {

	hour: number;
	minute: number;
	second: number;
	foas: number;
	foasType: string;

	constructor(
		hour: number = 0,
		minute: number = 0,
		second: number = 0,
		foas: number = 0,
		foasType: string = ''
	) {
		this.hour = hour;
		this.minute = minute;
		this.second = second;
		this.foas = foas;
		this.foasType = foasType;
	}
}
