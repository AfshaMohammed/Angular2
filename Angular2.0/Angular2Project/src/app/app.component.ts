import { Component } from '@angular/core';
import {HomeComponent} from './home/index';
import { ChildComponent } from './child/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'app works!';
}
