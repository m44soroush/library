import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {FadingTrigger} from "../shared/routing-animation";

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  animations:[
    FadingTrigger
  ]
})
export class ResourcesComponent implements OnInit,OnDestroy {

  @HostBinding('@fading') routAnimation=true;

  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.routAnimation=false;
  }

}
