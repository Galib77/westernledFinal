declare function require(path: string);
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-and-stage-show',
  templateUrl: './event-and-stage-show.component.html',
  styleUrls: ['./event-and-stage-show.component.css']
})
export class EventAndStageShowComponent implements OnInit {

  eventSrc = require('../../../../assets/images/services/event-and-stage-show-service.jpg');

  haeding:string = "EVENT & STAGE SHOW";
  desc:string = "One of the first factors in event management programs being a success comes from co-ordination. As inventive consultants throughout India, Stage Show Events tend to deliver an answer that gives an instantaneous choice to facilitate shut down and proper any problems that you just could also be having at this moment in time.  Stage Show Events provides high-quality Sound systems as well as simple Stage Show Events depending on your requirements. We will design your plan before suggesting anything. We will walk you through the plan.Reinforcement systems as well as simple Stage Show Events."

  constructor() { }

  ngOnInit() {
  }

}
