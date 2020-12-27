declare function require(path: string);
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smallabout',
  templateUrl: './smallabout.component.html',
  styleUrls: ['./smallabout.component.css']
})
export class SmallaboutComponent implements OnInit {

  aboutSrc = require('../../../../assets/images/about-us.jpg');

  aboutUs:string = 'About Us';
  aboutUsWelcome:string = 'welcome western led solution';
  aboutUsPara:string = 'Western LED Solution is a leading Manufacturer of LED Display & Providing LED Screen & LED Van on rent. We at Western LED Solution provide LED screen on events & LED van for road show & for digital advertising. Western LED Solution also deal in LED displays that used for multiple purpose & developing customized product as per customer requirement.';

  constructor() { }

  ngOnInit() {
  }

}
