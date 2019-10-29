import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[cdmToggleTemplate]'
})
export class cdmStructuralToggle {
	constructor(
	private template: TemplateRef<any>,
	private container: ViewContainerRef
	) {}

	@Input() set cdmToggleTemplate(value: boolean) {
		if (value === true) {
			this.container.createEmbeddedView(this.template);
		} else {
			this.container.clear();
		}
	}

}