import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
	public cone = true;
	public ctwo = true;
	public style = "italic";
	public size = "36px";
	toggle(){
		this.cone = !this.cone;
		this.ctwo = !this.ctwo; 
	}
  constructor() { }

  ngOnInit() {
  }

}
