import { Directive, Input, OnInit } from "@angular/core";
import { AbstractDirective } from "./AbstractDirective";

@Directive({
    selector : "[progress]"
})
export class VolumeProgressDirective extends AbstractDirective {
    
    @Input() strokeDashArray !:string;
    //slider max value from 0 to 100
    private maxSlider = 100;
    override setOffset() : void{
        this.setProgress();
    }
    
    setProgress(): void{
        const element = <SVGElement>this.el.nativeElement;
        const line = element.firstElementChild;
         /**
         * value are strings
         * need to substract from max progress 
         * in order to slide from left to right
         */
        const sliderValue = parseInt(this.strokeDashArray) * 
            ( this.maxSlider - parseInt(this.slider.value)) / this.maxSlider;
            
        this.renderer.setStyle(line, 'stroke-dashoffset' , sliderValue.toString())
    }
}