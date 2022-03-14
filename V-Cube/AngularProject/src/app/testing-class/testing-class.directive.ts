import { Directive } from '@angular/core';

@Directive({
  selector: '[appTestingClass]'
})
export class TestingClassDirective {

  ColorApplied ="bg-primary";
  constructor() { }
 ngOnInit(){
   console.log("Directive Mohan");
 }

}
