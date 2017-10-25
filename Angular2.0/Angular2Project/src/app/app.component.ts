import { Component } from '@angular/core';
import {HomeComponent} from './home/index';
import { ChildComponent } from './child/index';
import {LayoutComponent} from './layout/index';
import {DataComponent} from './data/index';
import {DesignComponent} from './design/index';
import {PassComponent} from './pass/index';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'app works!';
  data = {
  name: "Chris",
  color: "white"
  };
}
