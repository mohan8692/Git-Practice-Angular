import { Component, Directive, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-class',
  templateUrl: './testing-class.component.html',
  styleUrls: ['./testing-class.component.css']
})
export class TestingClassComponent implements OnInit {

  public title = "Interpollation";
  public PropertyBinding ="bg-warning border border-danger";
  public PropertyBindingCustomeClassVariable ="propertyBindingExampleClass";
  public colvalue =2;
  ClassBindingExample =false;
  NgCLassCheckingexample=true;
  StyleBindingVariable ="text-align:center;background-color:red";
  fullName= ""; 
  IsCondition = true;
  conditionchecking=false; 
  name ="Mohan Madaparthi";
  user=[{'name':'mohan',"marks":200},{'name':'kishore','marks':300}];
  userData = [
    {
      "firstname":"mohan",
      "lastname":"madaparthi",
      "gmail":"mohan123@gmail.com"
    },
    {
      "firstname":"jaggu",
      "lastname":"golla",
      "gmail":"golaa23@gmail.com"
    },
    {
      "firstname":"kishore",
      "lastname":"mekala",
      "gmail":"kis123@gmail.com"
    },
    {
      "firstname":"karhi",
      "lastname":"morla",
      "gmail":"karthi123@gmail.com"
    }
  ];
  dateFormate={'Country':'India','date':new Date()};

  InterpollationMethod(){
    //return "Interpollation Method Testing";
    return 5;
  }

  GetClassByUsingFuction(){
    if(this.NgCLassCheckingexample){
        return 'highlights';
    }
    else{
        return 'highlights2';
    }
  }

  EventBindingMethod(){
    console.log("EventBindingExampleForConsole");
  }
  OnFocus(){
    alert("OnFocusAlert");
  }
  OnBlur(){
    alert("OnBlurEventBindine");
  }
  MouseOver(){
    console.log("MouseOverConsole");
  }
  MouseOut(){
    console.log("OnMouseOut");
  }
  constructor() { }

  Languages =["html","javascript","java","Powe BI","Bootstrap"]
  Marks =[{'Maths':45,'English':54,'Physics':99},
          {'Maths':45,'English':54,'Physics':99}, 
          {'Maths':45,'English':54,'Physics':99}           
  ];

  ngOnInit(): void {
  }


}
