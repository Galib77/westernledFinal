declare function require(path: string);
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-van-road-show',
  templateUrl: './mobile-van-road-show.component.html',
  styleUrls: ['./mobile-van-road-show.component.css']
})
export class MobileVanRoadShowComponent implements OnInit {

  mobilevanSrc = require('../../../../assets/images/services/mobilevan-roadshow-service.jpg');

  haeding:string = "MOBILE VAN / ROAD SHOW";
  desc:string = "We are among the prominent organization in the industry in offering a wide assortment of Promotional Mobile Van to our valuable customers. These offered services are rendered using best quality van by keeping in mind the prevalent trends of the industry. Quality controller checks these services so as to confirm their capability to meet the requirements of clients. These services are used for promotion of the products. We are leading Mobile Van Advertising company in Pune, India, serving Maharashtra."

  constructor() { }

  ngOnInit() {
  }

}
