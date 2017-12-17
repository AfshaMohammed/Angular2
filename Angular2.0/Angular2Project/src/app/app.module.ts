import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { LayoutComponent } from './layout/layout.component';
import { DataComponent } from './data/data.component';
import { DesignComponent } from './design/design.component';
import { PassComponent } from './pass/pass.component';
import { CustomComponent } from './custom/custom.component';
import {MyHighLighterDirective} from './app.myhighlighter';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChildComponent,
    LayoutComponent,
    DataComponent,
    DesignComponent,
    PassComponent,
    CustomComponent,
    MyHighLighterDirective
  ],

  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule
  ],
  
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
