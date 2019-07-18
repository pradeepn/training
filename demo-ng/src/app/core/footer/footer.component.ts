import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../version/version.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  versionTxt: string;
  constructor(private versionSvc: VersionService) {
  }
  ngOnInit() {
    this.versionSvc.currentVersion.subscribe(ver => this.versionTxt = ver);
  }

}
