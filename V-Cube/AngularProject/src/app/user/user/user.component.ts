import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userData:any = [
    {
      "id" : 1,
      "firstname":"mohan",
      "lastname":"madaparthi",
      "gmail":"mohan123@gmail.com"
    },
    {
      "id" : 2,
      "firstname":"jaggu",
      "lastname":"golla",
      "gmail":"golaa23@gmail.com"
    },
    {
      "id" : 3,
      "firstname":"kishore",
      "lastname":"mekala",
      "gmail":"kis123@gmail.com"
    },
    {
      "id" : 4,
      "firstname":"karhi",
      "lastname":"morla",
      "gmail":"karthi123@gmail.com"
    }
  ];
  constructor(public activatedroutes : ActivatedRoute ,public router : Router) {
   
  }

  ngOnInit(): void {
  }

}
