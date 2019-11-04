import { Component, OnInit } from '@angular/core';
import { cdmSampleService } from './Interceptors/cdmSample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cdmCustomInterceptor';
  data: { heroesUrl: string, textfile: string } = { heroesUrl: '', textfile: '' };

  constructor(private sampleService: cdmSampleService) { }

  ngOnInit() {
  	 this.sampleService.getData().subscribe(d => this.data = d);
  }
}
