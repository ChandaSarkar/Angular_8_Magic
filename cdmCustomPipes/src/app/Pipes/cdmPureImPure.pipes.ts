import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'cdmFilterPipe',
	pure: false // Set this true or remove this to make it a pure pipe
})
export class cdmPureImPure implements PipeTransform {
	
	transform (list: [{name: string, status: string}], filter: string) {
		if (filter.length === 0) {
			return list;
		}

		let filterArr = [];
		for (let key in list) {
			if (list[key].status.toLowerCase().indexOf(filter.toLowerCase()) > -1) {
				filterArr.push(list[key]);
			}
		}
		return filterArr;
		
	}
}