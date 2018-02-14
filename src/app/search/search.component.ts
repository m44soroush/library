import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {FadingTrigger} from "../shared/routing-animation";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations:[
    FadingTrigger
  ]
})
export class SearchComponent implements OnInit,OnDestroy {

  // @HostBinding('@fading') routAnimation=true;

  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy(){
    // this.routAnimation=false;
  }

}
