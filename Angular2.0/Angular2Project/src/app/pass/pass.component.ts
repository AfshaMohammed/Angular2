import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent implements OnInit {
@Input() data;
  constructor() { }

  ngOnInit() {
  }

}
