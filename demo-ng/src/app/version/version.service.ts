import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class VersionService {
  private versionSource = new BehaviorSubject('V1.23');
  currentVersion = this.versionSource.asObservable();

  constructor() { }

  updateVersion(version: string) {
    this.versionSource.next(version);
  }
}
