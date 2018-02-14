import {animate, keyframes, query, stagger, style, transition, trigger} from "@angular/animations";


export const ListStateTrigger = trigger('listState', [
  transition('*=>*', [
    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(-100%)'
      }),
      stagger(300, [
        style({
          opacity: 0,
          transform: 'translateY(-100%)'
        }),
        animate('400ms ease-out',
          style({
            opacity: 0.9,
            transform: 'translateY(25%)'

          })
        ),
        animate('300ms ease-out',
          style({
            opacity: 1,
            transform: 'translateY(0)'

          })
        )
      ])

    ], {optional: true}),
    query(':leave', [
      style({
        opacity: 1,
        transform:'translateY(0)'
      }),
      stagger(300, [

        animate('200ms ease-in',
          style({
            opacity: 0.9,
            transform:'translateY(15%)'
          })),
        animate('400ms ease-in',
          style({
            opacity:0,
            transform:'translateY(-100%)'
          })),
      ])

    ], {optional: true})
  ])
]);
