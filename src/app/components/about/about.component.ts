declare function require(path: string);
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutSrc = require('../../../assets/images/scrolling-welcome.jpg');

  aboutTitle="about us"
  aboutUsText:string = "Western LED Solution is a leading Manufacturer of LED Display & Providing LED Screen & LED Van on rent. We at Western LED Solution provide LED screen on events & LED van for road show & for digital advertising. Western LED Solution also deal in LED displays that used for multiple purpose & developing customized product as per customer requirement. Our company is all about Quality Professional Service & Customer Satisfaction. We are dedicated to providing the best Quality LED display."
  
  whyCoouse:string = 'why choose us ?'
  constructor() { }

  ngOnInit() {
  }

}
