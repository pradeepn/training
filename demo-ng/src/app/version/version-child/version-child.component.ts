import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy, AfterViewInit, SimpleChange} from '@angular/core';
import { VersionService } from '../version.service';
@Component({
  selector: 'app-version-child',
  templateUrl: './version-child.component.html',
  styleUrls: ['./version-child.component.css']
})
export class VersionChildComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @Input() major: number;
  @Input() minor: number;
  @Output() parentMessage: EventEmitter<string> = new EventEmitter<string>();
  versionText: string;
  constructor(private version: VersionService) { }
  pMessage = "Message via View Child";
  change: any;
  log: string = '';
  ngOnInit() {
    this.log = this.log + 'Logged - OnInit \n';
    this.version.currentVersion.subscribe(v => this.versionText = v);
  }
  ngAfterViewInit()
  {
    this.log = this.log + 'Logged - OnAfterViewInit \n';
  }
  ngOnDestroy(){
    this.log = this.log + 'Logged - OnDestroy \n';
    alert('Component Destroyed');
  }
  ngOnChanges(changes: any){
    this.change = changes;
    this.log = this.log + 'Logged - OnChanges \n';
  }
  sendParentMessage() {
    this.parentMessage.emit("Message from Child Output Event-"+ new Date().toTimeString());
  }
  updateVersion() {
    this.version.updateVersion("V"+this.major.toString()+"."+this.minor.toString());
 }

}
