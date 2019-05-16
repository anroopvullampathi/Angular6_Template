import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  hedding = ['Image', 'Firstname', 'Lastname', 'Email', 'Number'];

  empname: any = [
    {img: '../assets/img/icon1.png', fname:'Anroop', lname: 'Vullampathi', email: 'anroop@gmail.com', num: 9849264317},
    {img: '../assets/img/icon2.png', fname:'Vasu', lname: 'Baggi', email: 'Vasu@gmail.com', num: 9845712567},
    {img: '../assets/img/icon3.png', fname:'Srikanth', lname: 'Bijjala', email: 'Bijjala@gmail.com', num: 9845712567}
  ]

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form) {
    console.log(form);
    alert("Got Code!!!");
    }
}
