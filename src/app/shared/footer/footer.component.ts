import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  heading1:string= "western led solution";
  heading2:string= "reach us";
  heading3:string= "map";

  smallDesc:string= "Western LED Solution is a leading Manufacturer of LED Display & Providing LED Screen & LED Van on rent.";
  follow:string= "follow us"

  address:string=" Western LED Solution, Handewadi, Katraj Bypass Road, Near Sopan Kaka Bank, Hadapsar, Pune, Maharashtra 412308";
  phone:string=" +91 95798 18112 | +91 97628 00808";
  email:string=" westernledsolution@gmail.com";

  copyrightYear: number = new Date().getFullYear();
  copyroghtText:string= "Western LED Solution  All Right Reserved. Designed And Developed By";

  constructor() { }

  ngOnInit() {
  }

}
