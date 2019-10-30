import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { Server } from './server.types'

@Injectable({
	providedIn: 'root'
})
export class cdmAsyncService {
	servers : Server[] = [
		{ name: 'Server A', status: 'Up' },
		{ name: 'Server B', status: 'Down' },
		{ name: 'Server C', status: 'Down' },
		{ name: 'Server D', status: 'Up' },
		{ name: 'Server E', status: 'Up' },
	];
	

	getAllServers(): Observable<Server[]> {
		return of(this.servers);
	}
}
