declare function require(path: string);
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {

  ourProducts:string = "Our Products";

  ledDisplaySrc = require('../../../../assets/images/services/led-display-service.jpg');
  advertisingSrc = require('../../../../assets/images/services/advertising-service.jpg');
  eventAndStageShowSrc = require('../../../../assets/images/services/event-and-stage-show-service.jpg');
  airportAndRailwaySrc = require('../../../../assets/images/services/airport-and-railwa-service.jpg');
  mobilevanRoadshowSrc = require('../../../../assets/images/services/mobilevan-roadshow-service.jpg');
  scrollingBoardSrc = require('../../../../assets/images/services/scrolling-board-service.jpg');
  threedHalogramSrc = require('../../../../assets/images/services/3d-halogram-service.jpg');


  customOptions: any = {
    loop: true,
    margin: 10,
    autoplay:true,
    responsiveClass: true,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
       items: 1
     },
      480: {
       items: 2
     },
      940: {
       items: 3
     }
    },
   nav: true
  }

  constructor() { }

  ngOnInit(): void {}

}
