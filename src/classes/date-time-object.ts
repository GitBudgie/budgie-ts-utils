export class DateTimeObject {

	year: number;
	month: number;
	day: number;
	hour: number;
	minute: number;
	second: number;
	foas: number;
	foasType: string;

	constructor(
		year: number = 0,
		month: number = 0,
		day: number = 0,
		hour: number = 0,
		minute: number = 0,
		second: number = 0,
		foas: number = 0,
		foasType: string = ''
	) {
		this.year = year;
		this.month = month;
		this.day = day;
		this.hour = hour;
		this.minute = minute;
		this.second = second;
		this.foas = foas;
		this.foasType = foasType;
	}
}
