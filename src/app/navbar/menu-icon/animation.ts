import { transition,animate, style, state, trigger } from '@angular/animations';

export const Parent = trigger('animateParent',[
    state('default', style({ background : 'transparent' })),
    state('active', style({background : 'rgba(255, 255, 255, .1)', border :'1px solid rgba(255, 255,255, .6)'})),
    transition('* => *',animate(300))
]);
export const FirstLine = trigger('animateFirstLine',[
    state('active', style({ transform : 'rotate(45deg) translate(5px, 5px)', background : 'rgb(168, 218, 252)'})),
]);
export const SecondLine = trigger('animateSecondLine',[
    state('active', style({ opacity : 0, transform : 'translate3d(-10px, 0, 0)' }))
]);
export const LastLine = trigger('animateLastLine',[
    state('active', style({ transform : 'rotate(-45deg) translate(4px, -4px)', background : 'rgb(168, 218, 252)'})),
])



