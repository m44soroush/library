import {animate, animateChild, keyframes, query, style, transition, trigger} from "@angular/animations";

export const FadingTrigger = trigger('fading', [
  transition(':enter', [
    animate(200, keyframes([
      style({
        opacity: 0
      }),
      style({
        opacity: 1
      })
    ])),
    query('@listState', animateChild(), {optional: true}),
    query('@dashboardListState', animateChild(), {optional: true})
  ])
]);

