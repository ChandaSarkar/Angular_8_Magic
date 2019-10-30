import { Component, OnInit } from '@angular/core';
import { cmdBasicService } from './CustomServices/cdmBasic.service';
import { cdmAsyncService } from './CustomServices/cdmAsync.service';
import { Server } from './CustomServices/server.types'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  Servers: Server[];
  asyncServerData: Server[];
  serverData: string;

  constructor (private serverService: cmdBasicService, private asyncServerService: cdmAsyncService) {}

  ngOnInit() {
  	this.fetchServer();
  	this.fetchAsyncServer();
  }

  fetchServer(): void {
  	this.Servers = this.serverService.getAllServers();
  }

  fetchAsyncServer(): void {
  	this.asyncServerService.getAllServers().subscribe((data) => {
  		this.asyncServerData = data;
  	});
  }

  getAsyncData() {
  	this.serverService.getPromiseData().then((data:any) => {
  		this.serverData = data;
  	});
  }
}
