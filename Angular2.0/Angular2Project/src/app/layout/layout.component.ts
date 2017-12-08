import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
	userForm = new FormGroup({
		name: new FormControl(),
		email: new FormControl(),
		address: new FormGroup({
		street: new FormControl(),
		city: new FormControl(),
		postalcode: new FormControl()
		})

	});
	onSubmit(){
	    console.log(this.userForm.value);
	}
  constructor() { }

  ngOnInit() {
  }

}
