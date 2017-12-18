import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
	log(){
  	console.log('Hey you loggin the service!');
  }
  constructor() { }
  
}
