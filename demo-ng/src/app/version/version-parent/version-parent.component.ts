import { Component, OnInit, ViewChild } from '@angular/core';
import { VersionService } from '../version.service';
import { VersionChildComponent } from '../version-child/version-child.component';
@Component({
  selector: 'app-version-parent',
  templateUrl: './version-parent.component.html',
  styleUrls: ['./version-parent.component.css']
})
export class VersionParentComponent implements OnInit {
  @ViewChild(VersionChildComponent) vChild;
  minor: number = 23;
  major: number = 1;
  childMessage: string;
  constructor(private version: VersionService) { }
  newMinor() {
    this.minor++;
    this.version.updateVersion("V"+this.major.toString()+"."+this.minor.toString());
  }
  newMajor() {
    this.major++;
    this.minor = 0;
    this.version.updateVersion("V"+this.major.toString()+"."+this.minor.toString());
  }
  messageFromChild($event) {
    this.childMessage = $event;
  }
  ngOnInit() {
    this.childMessage = this.vChild.pMessage;
  }

}
