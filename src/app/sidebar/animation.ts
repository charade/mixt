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
        style({ width: '12rem', opacity : 1 }),
        query('.sidebar-item', style({ opacity : 0, transform : 'translateX(-200px)'})),

        query('.sidebar-item', stagger('80ms', animate('600ms 100ms', keyframes([
            style({ opacity : 0, transform : 'translateX(-200px)'}),
            style({ opacity : 0.5, transform : 'translateX(20px)'}),
            style({ opacity : 0.5, transform : 'translateX(-5px)'}),
            style({ opacity : 1, transform : 'translateX(0)'}),
        ]))),{ optional : true })
    ]),

    transition('active => default', [
        query('.sidebar-item', stagger('-60ms', animate('300ms',
            style({ opacity : 0, transform : 'translateX(-200px)'})
        )))
    ])
])