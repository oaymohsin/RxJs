import { AfterViewInit, Component } from '@angular/core';
import { DesignUtilityService } from '../../../Services/design-utility.service';
import { Subscription, interval, timer } from 'rxjs';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrl: './interval-timer.component.scss'
})
export class IntervalTimerComponent implements AfterViewInit {
  IntervalData:number=0;
  TimerData:number=0
  obsSubscription!:Subscription
  timerSubscription!:Subscription

  constructor(private designService:DesignUtilityService){}

  ngAfterViewInit(): void {
      const intervalObs=interval(1000)
      const timerObs=timer(5000,1000)
      this.obsSubscription=intervalObs.subscribe((res)=>{
        console.log(res)
        this.IntervalData=res
        const val=`Video No ${res}`
        this.designService.print(val,'elContainer')
      })

      this.timerSubscription=timerObs.subscribe((res)=>{
        console.log(res)
        this.TimerData=res
        const val=`Video No ${res}`
        this.designService.print(val,'elContainer2')
      })
  }

  stopObs(){
    this.obsSubscription.unsubscribe()
  }

  stopTimerObs(){
    this.timerSubscription.unsubscribe()

  }
}
