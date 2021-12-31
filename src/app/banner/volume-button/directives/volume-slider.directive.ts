import {  Directive, Input } from "@angular/core";
import { AbstractDirective } from "./AbstractDirective";

@Directive({
    selector : '[seizable]'
})
export class VolumeSliderDirective extends AbstractDirective {
   
    override setOffset() {
        const nativeElement = this.el.nativeElement;
        const value =  parseInt(this.slider.value) ;
        this.renderer.setStyle(nativeElement, 'left', `${value}%`)
    }
}