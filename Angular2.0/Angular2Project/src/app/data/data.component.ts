import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
	myString = "I love chicken";
	myBoolean = "true";
  constructor() { }

  ngOnInit() {
  }

}
