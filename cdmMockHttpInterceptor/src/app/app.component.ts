import { Component, OnInit } from '@angular/core';
import { cdmProducts } from './Common/Services/cdmProducts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cdmMockHttpInterceptor';
  productsList = [];

  /*products = [
		{ id: 1, name: 'Red Kurti', brand: 'Akon' },
		{ id: 2, name: 'Blue Kurti', brand: 'Akkriti' },
		{ id: 3, name: 'Pink Traditional Skirt', brand: 'ONLY' },
		{ id: 4, name: 'Red T-shirt', brand: 'MANGO' }
	];*/

  constructor(private cdmService: cdmProducts) {}

  ngOnInit() {
  	this.cdmService.getAllProducts().subscribe(res => {
  		this.productsList = res;
  	})
  }
}
