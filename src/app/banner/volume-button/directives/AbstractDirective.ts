import { Renderer2, AfterViewInit, ElementRef, Input, Directive } from "@angular/core";

@Directive()
export abstract class AbstractDirective implements AfterViewInit{

    private unlistenSliderChange !: () => void
    @Input() slider !: HTMLInputElement; 
    
    constructor(protected el : ElementRef, protected renderer: Renderer2){

    }
    
    ngAfterViewInit(): void{
        this.setOffset();
        this.unlistenSliderChange = this.renderer.listen(this.slider, 'change', () =>{
            this.setOffset();
        })
    }

    setOffset() : void { }

    ngOnDestroy(): void{
       this.unlistenSliderChange()
    }
}