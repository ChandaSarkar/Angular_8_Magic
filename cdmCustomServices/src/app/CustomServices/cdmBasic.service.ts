import { Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root'
})
export class cmdBasicService {
	servers : { name: string, status: string }[] = [
		{ name: 'Server A', status: 'Up' },
		{ name: 'Server B', status: 'Down' },
		{ name: 'Server C', status: 'Down' },
		{ name: 'Server D', status: 'Up' },
		{ name: 'Server E', status: 'Up' },
	];

	someAjaxData: string = 'Here I am ajax call response';
	
	getAllServers() {
		return this.servers;
	}

	getPromiseData() {
		return new Promise((resolve, reject) => {
			setTimeout(() => { resolve(this.someAjaxData); }, 500);
		});
	}

}
