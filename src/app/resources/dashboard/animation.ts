import {animate, keyframes, query, stagger, style, transition, trigger} from "@angular/animations";

export const DashboardListStateTrigger = trigger('dashboardListState', [
  transition('*=>*', [
    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      stagger(200, [
        style({
          opacity: 0,
          transform: 'translateX(-100%)',
        }),
        animate('200ms ease',
          style({
            opacity: 0.9,
            transform: 'translateX(15%)',
          })
        ),
        animate('200ms ease',
          style({
            opacity: 1,
            transform: 'translateX(0)',
          })
        )
      ])
    ], {optional: true}),
    query(':leave', [
      style({
        opacity: 1,
        transform: 'translateX(0)'
      }),
      stagger(300, [
        style({
          opacity: 1,
          transform: 'translateX(15%)'
        }),
        animate(400,
          style({
            opacity: 0,
            transform: 'translateX(-100%)'
          }))
      ])
    ], {optional: true})

  ])
]);
