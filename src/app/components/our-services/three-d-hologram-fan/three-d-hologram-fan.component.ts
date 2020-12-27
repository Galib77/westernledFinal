declare function require(path: string);
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-d-hologram-fan',
  templateUrl: './three-d-hologram-fan.component.html',
  styleUrls: ['./three-d-hologram-fan.component.css']
})
export class ThreeDHologramFanComponent implements OnInit {

  halogramSrc = require('../../../../assets/images/services/3d-halogram-service.jpg');

  haeding:string = "3D HOLOGRAM FAN";
  desc:string = "Our 3D Hologram Fans are lightweight & portable devices which can be setup on any wall in minutes. All you need is a plug-point to create a floating mid air 3D Hologram visual for your audience. We can also provide cover for safety over the Hologram fan. We use state of the art micro LEDs to create a HD quality 3D holographic displays. Our 3D Hologram fans consist of high lumens, 16.5 million plus color, extremely durable LEDs rotating at 1500 rpm to create this amazing holographic effect.";

  constructor() { }

  ngOnInit() {
  }

}
