import { transition, animate, query, style, state, trigger } from '@angular/animations';
import { Colors } from 'src/assets/colors';

export const parent = trigger('animateParent',[
    state('default', style({ background : 'transparent' })),
    transition('* => *', animate(400)),
]);
export const firstLine = trigger('animateFirstLine',[
    state('active', style({ transform : 'rotate(45deg) translate(5px, 5px)', background : Colors.darkYellow})),
]);
export const secondLine = trigger('animateSecondLine',[
    state('active', style({ width : 0 }))
]);
export const lastLine = trigger('animateLastLine',[
    state('active', style({ transform : 'rotate(-45deg) translate(4px, -4px)', background : Colors.darkYellow})),
])



