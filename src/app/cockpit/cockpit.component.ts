import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // With alias 'bpCreated' bluePrintAdded would not be call outside anymore.
  @Output('bpCreated') bluePrintAdded = new EventEmitter<{serverName: string, serverContent: string}>();
  serverElements: any[] = [];
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.bluePrintAdded.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

}
