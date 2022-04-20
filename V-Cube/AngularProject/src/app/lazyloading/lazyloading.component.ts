import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users.model';
import { TestserveService } from '../services/testserve.service';

@Component({
  selector: 'app-lazyloading',
  templateUrl: './lazyloading.component.html',
  styleUrls: ['./lazyloading.component.css']
})
export class LazyloadingComponent implements OnInit {

  public userDetails:any = [];
  public postdetails:any = [];
 // public employee:any = {"name":"mohan madaparthi"};
 showLoader = false;
 errmsg:string = '';

  constructor(private service : TestserveService) { }

  user = {
    id: 5,
    name: "Dhoni",
    username: "Kamren",
    email: "Dhoi@email.com",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342"
      }
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "CSK",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems"
    }
  }

  userpatch :any= {
    id: 5,
    name: "Dhoni",
    username: "Kamren"
  }

  ngOnInit(): void {
    //this.service.getuser();
    this.service.user;
  }
  usersdata(){
    this.service.details.subscribe(
      (result)=>{
        this.userDetails = result;
        //console.log(this.userDetails);
      //  this.showLoader = false;
      },
      (error)=>{
        //this.errmsg = error.message;
       // this.showLoader = false;
      }
    );
  }
 postdatamethod(){
    this.service.postmethod(this.user).subscribe(
      (result : Users)=>{
        this.postdetails= result;
        console.log(this.postdetails);
        console.log(this.postdetails.name);
      },
      (error)=>{

      }
    );
  }
  pachUsers(){
    this.service.patchUsersService(this.userpatch).subscribe(
      (result:Users)=>{
        this.postdetails = result;
        console.log(this.postdetails);
      },
      (error)=>{

      }
    );

  }
  deleteData(){
    this.service.deleteDataMethod().subscribe(
      (result)=>{
        this.postdetails = result;
        console.log(this.postdetails);
    }
    );
  }

}
