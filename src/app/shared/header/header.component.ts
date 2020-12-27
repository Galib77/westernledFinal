declare function require(path: string);
import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imageSrc = require('../../../assets/images/logo.png');


  public sendEmail(e: Event) {
    e.preventDefault();
      emailjs.sendForm('gmail', 'template_2r77yqt', e.target as HTMLFormElement, 'user_obtDlsxW16znMxF1Nm3Ro')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  constructor() { }

  ngOnInit() {
  }

  getContactData() {
    {
      alert("Your submission has been sent successfully!");
    }
  }

}
