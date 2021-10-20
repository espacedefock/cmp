import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

// ViewEncapsulation.None: apply css globaly
// ViewEncapsulation.Emulated:
// ViewEncapsulation.ShadowDom:
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: any = {
    type: '',
    name: '',
    content: ''
  };
  @Input() name!: string;

  constructor() { 
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

}
