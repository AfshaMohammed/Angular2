import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
	public fname="Afsha";
	public lname="Mohammed";
  constructor() { }

  ngOnInit() {
  }

}
