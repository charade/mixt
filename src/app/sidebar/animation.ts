import { 
    state, 
    stagger,
    trigger,transition,
    query,
    animate,
    style,
    keyframes } from '@angular/animations';

export const animateSidebar = trigger('animateSidebar', [
    state('default', style({ width : '0', opacity : 0 })),

    transition('default => active', [
        
        query('.sidebar-item', style({ opacity : 0, transform : 'translateX(-200px)'})),

        animate(100, style({ width: '15rem', opacity : 1 })),

        query('.sidebar-item', stagger('30ms', animate('600ms ease-in', keyframes([
            style({ opacity : 0, transform : 'translateX(-200px)'}),
            style({ opacity : 0.5, transform : 'translateX(10px)'}),
            style({transform : 'translateX(-3px)'}),
            style({ opacity : 1, transform : 'translateX(0)'}),
        ]))),{ optional : true }),
    ]),

    transition('active => default', [
        query('.sidebar-item', stagger('-40ms', animate('200ms',
            style({ opacity : 0, transform : 'translateX(-70px)'})
        ))),
        animate(60)
    ])
])