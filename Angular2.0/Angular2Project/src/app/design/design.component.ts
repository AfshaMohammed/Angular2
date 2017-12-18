import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
	data = {
		name: "Mike",
		color: "black"
	};;
myName = "Afsha"
  onSubmit(value:any){
      console.log(value);
  }
  public name = "ThePokeMon";
  date = new Date();
  constructor() { }

  ngOnInit() {
  }


}
