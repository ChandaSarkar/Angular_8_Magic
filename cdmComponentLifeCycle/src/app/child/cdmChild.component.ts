import { Component, 
	OnInit, OnChanges, 
	DoCheck, AfterViewInit, 
	AfterViewChecked, AfterContentInit, 
	AfterContentChecked, OnDestroy,
	Input
} from '@angular/core';

@Component ({
	selector: 'child',
	template: `
   	<div>Child Component</div>
   	{{cdmInputData}}
   	<input type="text" [(ngModel)]="cdmName"/>
   `
})
export class cdmChildComponent implements 
OnInit,
OnChanges,
DoCheck,
AfterViewInit,
AfterViewChecked,
AfterContentInit,
AfterContentChecked,
OnDestroy
 {
 	@Input() cdmInput: string = '';

 	cdmName: string = "dummy";

	constructor() 				{ console.log('CHILD :: constructor init');			}

	ngOnInit() 					{ console.log('CHILD :: ngOnInit');						}

	ngOnChanges() 				{ console.log('CHILD :: ngOnChanges');					}

	ngDoCheck() 				{ console.log('CHILD :: ngDoCheck'); 					}

	ngAfterViewInit() 		{ console.log('CHILD :: ngAfterViewInit');			}

	ngAfterViewChecked() 	{ console.log('CHILD :: ngAfterViewChecked');		}

	ngAfterContentInit() 	{ console.log('CHILD :: ngAfterContentInit');		}

	ngAfterContentChecked() { console.log('CHILD :: ngAfterContentChecked');	}

	ngOnDestroy() 				{ console.log('CHILD :: ngOnDestroy');					}
}