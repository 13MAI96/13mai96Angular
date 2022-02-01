import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-home',
  templateUrl: './home-mobile-layout.component.html',
  styleUrls: ['./home-mobile-layout.component.scss']
})
export class HomeMobileLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Home Mobile Layout")
  }

}
