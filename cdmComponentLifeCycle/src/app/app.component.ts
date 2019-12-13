import { Component, 
	OnInit, OnChanges, 
	DoCheck, AfterViewInit, 
	AfterViewChecked, AfterContentInit, 
	AfterContentChecked, OnDestroy 
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements 
OnInit,
OnChanges,
DoCheck,
AfterViewInit,
AfterViewChecked,
AfterContentInit,
AfterContentChecked,
OnDestroy {
  title = 'cdmComponentLifeCycle';
  cdmInputData: any;

  	constructor() 				{ console.log('PARENT :: constructor init'); 			}

	ngOnInit() 					{ console.log('PARENT :: ngOnInit'); 						}

	ngOnChanges() 				{ console.log('PARENT :: ngOnChanges'); 					}

	ngDoCheck() 				{ console.log('PARENT :: ngDoCheck'); 						}

	ngAfterViewInit() 		{ console.log('PARENT :: ngAfterViewInit');				}

	ngAfterViewChecked() 	{ console.log('PARENT :: ngAfterViewChecked');			}

	ngAfterContentInit() 	{ console.log('PARENT :: ngAfterContentInit');			}

	ngAfterContentChecked() { console.log('PARENT :: ngAfterContentChecked');		}

	ngOnDestroy() 				{ console.log('PARENT :: ngOnDestroy');					}
}
