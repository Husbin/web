import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import {DynamicComponentDirective} from './DynamicComponentDirective';
import { InputComponent } from './input/input.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    DynamicComponentDirective,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  entryComponents: [
    SampleComponent,
    InputComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
