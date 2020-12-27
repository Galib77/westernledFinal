declare function require(path: string);
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.css']
})
export class AdvertisingComponent implements OnInit {

  advertisingSrc = require('../../../../assets/images/services/advertising-service.jpg');

  title:string = "ADVERTISING";
  desc:string = "Our single-minded goal is to make your brand achieve its full potential. We strive to provide out-of-this-world creative solutions to our clients. We aim to transform your brand from where it is, into what it should be. With over 10 years of experience, our team is a talented mix of youth & expertise. But, don't just take our word for it! Call us, meet us and join us on an amazing adventure to propel your brand to newer heights."
  
  constructor() { }

  ngOnInit() {
  }

}
