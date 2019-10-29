import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[cdmIf]'
})
export class cdmStructuralDirective {
	constructor (
		private template: TemplateRef<any>,
		private domContainer: ViewContainerRef
	) { }

	@Input() set cdmIf(data: boolean) {
		if (data) {
			this.domContainer.createEmbeddedView(this.template);
	    } else {
	      this.domContainer.clear();
	    }
	}
}