declare function require(path: string);
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-led-display',
  templateUrl: './led-display.component.html',
  styleUrls: ['./led-display.component.css']
})
export class LedDisplayComponent implements OnInit {

  ledSrc = require('../../../../assets/images/services/led-display-service.jpg');

  haeding:string = "LED Display"
  desc:string = "A LED display is a flat panel display that uses an array of light-emitting diodes as pixels for a video display. Their brightness allows them to be used outdoors where they are visible in the sun for store signs and billboards. In recent years, they have also become commonly used in destination signs on public transport vehicles, as well as variable-message signs on highways. LED displays are capable of providing general illumination in addition to visual display, as when used for stage or other decorative (as opposed to informational) purposes. LED display have many advantages over incandescent light sources, including lower energy consumption, longer lifetime, improved physical robustness, smaller size, and faster switching."

  constructor() { }

  ngOnInit() {
  }

}
