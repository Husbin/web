import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoute} from './app.route';
import {MeditorService} from './service/meditor.service';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoute),
  ],
  providers: [
    MeditorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
