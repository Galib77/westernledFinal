declare function require(path: string);
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission-vision',
  templateUrl: './mission-vision.component.html',
  styleUrls: ['./mission-vision.component.css']
})
export class MissioVisionComponent implements OnInit {

  missionSrc = require('../../../../assets/images/our-missions.png');
  visionSrc = require('../../../../assets/images/visionn.png');


  missionTitle:string = 'Mission';
  missionDesc:string = 'We desire to be a LED lighting superstore, providing professional eco-friendly lighting solutions, enabling customers to reduce costs, conserve energy and protect environment.';
  
  visionTitle:string = 'Vision'
  visionDesc:string = 'Our Mission is to inspire customers to visually enhance natural environments through the use of energy efficient lighting. To increase our production capacity and turnover with an active marketing and sales strategy by specializing in manufacturing LED solutions.'
  
  constructor() { }

  ngOnInit() {
  }

}
