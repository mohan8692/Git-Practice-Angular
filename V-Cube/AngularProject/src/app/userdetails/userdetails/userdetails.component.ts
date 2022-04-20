import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  public userId:any;
  public userdetails:any = null;
  constructor(public routerdetails:ActivatedRoute, public router : Router) { }

  ngOnInit(): void {
    this.routerdetails.params.subscribe(
    (result:any) => {
      this.userId = result;
     // console.log(this.userId);
    }
    );
    this.routerdetails.queryParams.subscribe(
      (queryrsult:any)=>{
        this.userdetails = queryrsult;
        //console.log(this.userdetails)
      }
    );
  }
  goPreviosPage(){
   let uid:any= this.userId.id-1;
   if(uid >= 1 ){
      this.router.navigate(['/userdetails',uid]);
   }
  }
  goNextPage(){
    //console.log(this.userId.id)
    let uid:number = Number(this.userId.id) + 1 ;
    if(uid <= 4){
      this.router.navigate(['/userdetails',uid]);
    }
  }
}
