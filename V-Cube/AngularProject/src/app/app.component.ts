import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  option = {exact : true};
  title = 'AngularProject';
  passdata:any = '';
    passData(data:any){
      this.passdata = data;
    }
}

