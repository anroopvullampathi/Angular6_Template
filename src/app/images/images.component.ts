import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {
  images: any =[
    {img: 'assets/img/bb1.jpg'},
    {img: 'assets/img/bb2.jpg'},
    {img: 'assets/img/a1.jpg'},
    {img: 'assets/img/a2.jpg'},
    {img: 'assets/img/a3.jpg'},
    {img: 'assets/img/a4.jpg'},
    {img: 'assets/img/g10.jpg'},
    {img: 'assets/img/g11.jpg'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
