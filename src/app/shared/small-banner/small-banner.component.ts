declare function require(path: string);
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-banner',
  templateUrl: './small-banner.component.html',
  styleUrls: ['./small-banner.component.css']
})
export class SmallBannerComponent implements OnInit {

  smallBannerSrc = require('../../../assets/images/small-banner.jpg');

  constructor() { }

  ngOnInit() {
  }

}
