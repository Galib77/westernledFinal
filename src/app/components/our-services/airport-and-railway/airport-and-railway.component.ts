declare function require(path: string);
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-airport-and-railway',
  templateUrl: './airport-and-railway.component.html',
  styleUrls: ['./airport-and-railway.component.css']
})
export class AirportAndRailwayComponent implements OnInit {

  airportSrc = require('../../../../assets/images/services/airport-and-railwa-service.jpg');

  haeding:string ="AIRPORT & RAILWAY"
  desc:string = "Airport & Railway station was beautified with LED Display entrance hall and paintings installed with bright lights. The provision of new digital information boards displaying train number, train name and expected time schedule was done."
  constructor() { }

  ngOnInit() {
  }

}
