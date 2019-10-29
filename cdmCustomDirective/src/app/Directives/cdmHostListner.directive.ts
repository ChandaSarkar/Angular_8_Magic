import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
	selector: '[cdmHostListner]'
})
export class cdmHostListner {
	
	constructor(private ele : ElementRef) { }

	@HostListener('mouseenter') highlightMe() {
		this.ele.nativeElement.style.background = 'yellow';
		this.ele.nativeElement.style.cursor = 'pointer';
	}

	@HostListener('mouseleave') unhighlightMe() {
		this.ele.nativeElement.style.background = '';
	}
}
