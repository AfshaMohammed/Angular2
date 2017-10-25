import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
	designTitle = "Welcome to Designers..!";
	firstName = "Afsha";
	myBoolean = true;
  constructor() { }

  ngOnInit() {
  }

}
