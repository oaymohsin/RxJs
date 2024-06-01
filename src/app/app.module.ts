import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FromEventComponent } from './Operators/fromEvent/from-event/from-event.component';
import { IntervalTimerComponent } from './Operators/IntervalTimer/interval-timer/interval-timer.component';
import { OfAndFromComponent } from './Operators/OFandFrom/of-and-from/of-and-from.component';
import { ToArrayComponent } from './Operators/ToArray/to-array/to-array.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FromEventComponent,
    IntervalTimerComponent,
    OfAndFromComponent,
    ToArrayComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
