declare function require(path: string);
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  bannerOneSrc = require ('../../../../assets/images/banner/banner-1.jpg');
  bannerTwoSrc = require ('../../../../assets/images/banner/banner-2.jpg');
  bannerThreeSrc = require ('../../../../assets/images/banner/banner-3.jpg');


  constructor() { }

  ngOnInit() {
  }

}
