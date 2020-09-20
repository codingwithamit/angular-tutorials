import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';//import to use form model

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingExampleComponent } from './property-binding-example/property-binding-example.component';
import { EventBindingExampleComponent } from './event-binding-example/event-binding-example.component';
import { TwoWayDatabindingComponent } from './two-way-databinding/two-way-databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingExampleComponent,
    EventBindingExampleComponent,
    TwoWayDatabindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule//Added this line to use ngModel(two way binding )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
