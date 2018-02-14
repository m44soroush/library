import {Component, HostBinding, OnInit} from '@angular/core';
import {FadingTrigger} from "../../shared/routing-animation";

@Component({
  selector: 'app-please',
  templateUrl: './please.component.html',
  styleUrls: ['./please.component.scss'],
  animations:[
    FadingTrigger,
  ]
})
export class PleaseComponent implements OnInit {

  @HostBinding('@fading') routeAnimation=true;
  constructor() { }

  ngOnInit() {
  }

}
