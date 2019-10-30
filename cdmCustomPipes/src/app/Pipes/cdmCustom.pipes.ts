import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
	name: 'cdmTruncateLastName'
})
export class cdmCustomPipe implements PipeTransform {
	transform(value: string) {
		return value.split(' ')[0];
	}
}