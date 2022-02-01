import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-home',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Home Layout")
  }

}
