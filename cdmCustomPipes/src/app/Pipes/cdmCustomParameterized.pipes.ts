import { Pipe , PipeTransform } from '@angular/core';

@Pipe({
	name: 'cdmShowName'
})
export class cdmCustomParameterized implements PipeTransform {
	
	transform(value: string, truncateData: string) {
		return (truncateData === 'firstName') ? value.split(' ')[0] : value.split(' ')[1];
	}
}