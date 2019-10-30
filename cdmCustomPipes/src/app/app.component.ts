import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'cdmPipes';
  employList = [
  	'Samanta James',
  	'Leo Frado',
  	'Stephen George'
  ];
  servers = [
  	{ name: 'Server A', status: 'Up' },
  	{ name: 'Server B', status: 'Down' },
  	{ name: 'Server C', status: 'Up' },
  	{ name: 'Server D', status: 'Up' }
  ];

  searchText = '';

  addNewServer() {
  	this.servers.push({ name: 'Server X', status: 'Up'});
  }
}
