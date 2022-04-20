import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router :Router, public activaterout : ActivatedRoute) { }

  ngOnInit(): void {
  }
  getTV(){
    this.router.navigate(['/home/tv']);
  }
  getAc(){
    this.router.navigate(['/home/ac']);
  }

}
