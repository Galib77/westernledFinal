import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
