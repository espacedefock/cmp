import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

// ViewEncapsulation.None: apply css globaly
// ViewEncapsulation.Emulated:
// ViewEncapsulation.ShadowDom:
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
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

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }

}
