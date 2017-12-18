import { Component, OnInit } from '@angular/core';
import {LoggingService } from '../logging.service';
@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css'],
  providers: [LoggingService]
})
export class CustomComponent implements OnInit {
	public firstname="Afsha";
	public lastname="Mohammed";

  constructor(private logger:LoggingService) { }
  logIt(){
  	this.logger.log();
  }

  ngOnInit() {
  }

}
