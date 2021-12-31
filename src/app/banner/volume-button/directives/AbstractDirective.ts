import { Renderer2, AfterViewInit, ElementRef, Input, Directive, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { MediaQueryService } from "src/app/services/media-query/media-query.service";

@Directive()
export abstract class AbstractDirective implements AfterViewInit, OnDestroy{
    private mediaSubscription : Subscription;
    protected unlistenSliderChange !: () => void
    @Input() slider !: HTMLInputElement; 
    
    constructor(protected el : ElementRef, 
        protected renderer: Renderer2, 
        private mediaQuery : MediaQueryService)
    { 
        this.mediaSubscription = new Subscription();
    };
    
    ngAfterViewInit(): void{
        this.setOffset();
        this.unlistenSliderChange = this.renderer.listen(this.slider, 'change', () =>{
            this.setOffset();
        });
        //need to replace offsets on resize or on reload
        this.mediaSubscription = this.mediaQuery.watch().subscribe(() => this.setOffset());
    }

    setOffset() : void { };

    ngOnDestroy(): void{
       this.unlistenSliderChange();
       this.mediaSubscription && this.mediaSubscription.unsubscribe();
    }
}