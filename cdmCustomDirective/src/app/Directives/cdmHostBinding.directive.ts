import { Directive, HostBinding } from '@angular/core';

@Directive({
	selector: '[cdmHostBinding]'
})
export class cdmHostBinding {
	@HostBinding() textContent = 'Hey ! this text is using @HostBinding';
	@HostBinding('style.cursor') cursor = 'pointer';
	@HostBinding('style.color') color = 'blue';

	// Binding classes using HostBinding
	@HostBinding('class') class = 'boldMe';
}