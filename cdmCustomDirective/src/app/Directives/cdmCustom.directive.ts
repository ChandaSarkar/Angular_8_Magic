import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: 'cdmBasic' })
export class cdmCustomDirective {
	constructor (ele: ElementRef) {
		ele.nativeElement.style.color = "red";
		ele.nativeElement.innerHTML = "<h5>I'm a basic Structural Directive</h5>"
	}
}