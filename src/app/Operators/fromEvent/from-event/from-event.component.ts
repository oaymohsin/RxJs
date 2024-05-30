import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../../../Services/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.scss'
})
export class FromEventComponent implements OnInit,AfterViewInit {
  @ViewChild('clickBtn') clickBtn!:ElementRef;

  constructor(private designService:DesignUtilityService){}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let vid=1;
    fromEvent(this.clickBtn.nativeElement,'click').subscribe(res=>{
    let val='video no '+ vid++

      console.log(val)
      this.designService.print(val,"elContainer")
    })
  }


  

}
