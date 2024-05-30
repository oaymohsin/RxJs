import { AfterViewInit, Component } from '@angular/core';
import { DesignUtilityService } from '../../../Services/design-utility.service';
import { from, interval, of, zip } from 'rxjs';

@Component({
  selector: 'app-of-and-from',
  templateUrl: './of-and-from.component.html',
  styleUrl: './of-and-from.component.scss',
})
export class OfAndFromComponent implements AfterViewInit {
  constructor(private designService:DesignUtilityService) {}

  ngAfterViewInit(): void {

    // Of operator
    const ofObs = of("Ali", "Hassan", "Shoaib", "Sunny", "Qasim");
    const intervalObs = interval(1000);
  
    // zip operators zips multiple operators together

   zip(ofObs, intervalObs).subscribe(([res]) => {
    this.designService.print(res,"elContainer")
      console.log(res);
    });


    //From operator
  //converts all the elements of the array to observables

  const arr=["Ali", "Hassan", "Shoaib", "Sunny", "Qasim"]
  
  const fromObs=from(arr)

  fromObs.subscribe((res)=>{
    this.designService.print(res,"elContainer2")
  })



  }

  
}
