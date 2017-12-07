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

  onSubmit(value:any){
      console.log(value);
  }
  constructor() { }

  ngOnInit() {
  }

}
