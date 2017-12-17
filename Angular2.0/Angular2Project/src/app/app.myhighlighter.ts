import {Directive, ElementRef} from '@angular/core';

@Directive({
	selector: '[my-highlighter]'
})

export class MyHighLighterDirective{
	constructor(el:ElementRef){
		el.nativeElement.style.background= "yellow";
	}
}