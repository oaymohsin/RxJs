import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FromEventComponent } from './Operators/fromEvent/from-event/from-event.component';
import { IntervalTimerComponent } from './Operators/IntervalTimer/interval-timer/interval-timer.component';
import { OfAndFromComponent } from './Operators/OFandFrom/of-and-from/of-and-from.component';
import { ToArrayComponent } from './Operators/ToArray/to-array/to-array.component';


const routes: Routes = [
 {path:"",component:HomeComponent},
 {path:"fromEvent",component:FromEventComponent},
 {path:"interval",component:IntervalTimerComponent},
 {path:"ofAndFrom",component:OfAndFromComponent},
 {path:"toArray",component:ToArrayComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){}
}
