import { defaultDateString } from './default-date-string';
import { defaultTimeString } from './default-time-string';

// The default date-time string. The format is "yyyy-mm-dd hh-ii-ss".
//
// Note: This does not have a test.
export const defaultDateTimeString = defaultDateString + ' ' +
	defaultTimeString;
