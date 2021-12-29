import { AfterViewInit, Directive, Input, Renderer2, ElementRef } from "@angular/core";
import { AbstractDirective } from "./AbstractDirective";

@Directive({
    selector : "[progress]"
})

export class VolumeProgressDirective extends AbstractDirective{
    private maxProgress = 750;
    
    override setOffset() : void{
        console.log('hello')
        const element = <SVGElement>this.el.nativeElement;
        const line = element.firstElementChild;
        //slider value is a string
        const sliderValue = this.maxProgress - parseInt(this.slider.value);
        console.log(this.slider.value)
        this.renderer.setStyle(line, 'stroke-dashoffset' , sliderValue.toString())
    }
}