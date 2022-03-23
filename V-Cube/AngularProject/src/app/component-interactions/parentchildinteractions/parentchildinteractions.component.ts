import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parentchildinteractions',
  templateUrl: './parentchildinteractions.component.html',
  styleUrls: ['./parentchildinteractions.component.css']
})
export class ParentchildinteractionsComponent implements OnInit {
  @Input() Relation : any = '';

  @Output() childtoParent:any  = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  childToParentAction(){
    this.childtoParent.emit('Child to Parent comparison');
  }

}
