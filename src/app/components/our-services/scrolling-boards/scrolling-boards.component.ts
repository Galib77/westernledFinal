declare function require(path: string);
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolling-boards',
  templateUrl: './scrolling-boards.component.html',
  styleUrls: ['./scrolling-boards.component.css']
})
export class ScrollingBoardsComponent implements OnInit {

  scrollingSrc = require('../../../../assets/images/services/scrolling-board-service.jpg');

  haeding:string = "SCROLLING BOARDS";
  desc:string = "Digital displays use technologies such as LCD, LED, projection and e-paper to display digital images, video, web pages, weather data, restaurant menus, or text. They can be found in public spaces, transportation systems, museums, stadiums, retail stores, hotels, restaurants and corporate buildings etc., to provide wayfinding, exhibitions, marketing and outdoor advertising. They are used as a network of electronic displays that are centrally managed and individually addressable for the display of text, animated or video messages for advertising, information, entertainment and merchandising to targeted audiences."

  constructor() { }

  ngOnInit() {
  }

}
