import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

// ViewEncapsulation.None: apply css globaly
// ViewEncapsulation.Emulated:
// ViewEncapsulation.ShadowDom:
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: any = {
    type: '',
    name: '',
    content: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

}
