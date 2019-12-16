import { Component, 
	OnInit, OnChanges, 
	DoCheck, AfterViewInit, 
	AfterViewChecked, AfterContentInit, 
	AfterContentChecked, OnDestroy,
	Input,
	SimpleChanges
} from '@angular/core';

@Component ({
	selector: 'child',
	template: `
   	<div>Child Component</div>
   	{{cdmInputData}}
   	<input type="text" [(ngModel)]="cdmName"/>
   	{{cdmInputData}}
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
 	/*@Input() cdmInput: string = '';*/
 	@Input() cdmInput2: string = '';

 	cdmName: string = "dummy";
 	cdmName2: string = "dummy";

	constructor() 				{ console.log('CHILD :: constructor init');			}

	ngOnInit() 					{ console.log('CHILD :: ngOnInit');						}

	// Method # 1 generic
	ngOnChanges(changes: SimpleChanges) 				{ 
		console.log('CHILD---- :: ngOnChanges');					
		console.log(changes);					
	}

	// Method # 2 individual
	@Input()
   set cdmInput(value: string) {
     this.cdmName = value;    
     console.log(`title is changed to ${value}`);
   }

   get cdmInput(): string {
     return this.cdmName;
   }

	ngDoCheck() 				{ console.log('CHILD :: ngDoCheck'); 					}

	ngAfterViewInit() 		{ console.log('CHILD :: ngAfterViewInit');			}

	ngAfterViewChecked() 	{ console.log('CHILD :: ngAfterViewChecked');		}

	ngAfterContentInit() 	{ console.log('CHILD :: ngAfterContentInit');		}

	ngAfterContentChecked() { console.log('CHILD :: ngAfterContentChecked');	}

	ngOnDestroy() 				{ console.log('CHILD :: ngOnDestroy');					}
}