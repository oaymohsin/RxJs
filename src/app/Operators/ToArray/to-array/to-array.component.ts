import { AfterViewInit, Component, OnInit } from '@angular/core';
import { from, interval, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.scss',
})
export class ToArrayComponent implements AfterViewInit {
  obsArray: any = [];
  userArray: any = [];

  users = [
    {
      id: 1,
      name: 'Ali Khan',
      country: 'Pakistan',
      email: 'ali.khan@example.com',
    },
    {
      id: 2,
      name: 'Hassan Ahmed',
      country: 'Pakistan',
      email: 'hassan.ahmed@example.com',
    },
    {
      id: 3,
      name: 'Shoaib Akhtar',
      country: 'Pakistan',
      email: 'shoaib.akhtar@example.com',
    },
    {
      id: 4,
      name: 'Sunny Leone',
      country: 'India',
      email: 'sunny.leone@example.com',
    },
    {
      id: 5,
      name: 'Qasim Ali',
      country: 'Pakistan',
      email: 'qasim.ali@example.com',
    },
  ];

  constructor() {}

  ngAfterViewInit(): void {
    const obs1 = interval(1000);

    obs1
      .pipe(
        //take operator will take only five elements from incoming data from interval
        take(5),
        toArray()
      )
      .subscribe((data) => {
        this.obsArray = data;

        console.log(this.obsArray);
      });

   
  }

  showUserData(){

     //another example with array of objects
     const obs3 = from(this.users);
     obs3.pipe(toArray()).subscribe((user) => {
       this.userArray = user;
       console.log(this.userArray);
     });
  }
}
