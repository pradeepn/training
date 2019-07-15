import { Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  @Output() loggedIn: EventEmitter<any> = new EventEmitter();
  constructor(private myRoute: Router) { }
  sendToken(token: string) {
    localStorage.setItem('auth-token', token);
    this.loggedIn.emit(true);
  }
  getToken() {
    return localStorage.getItem('auth-token');
  }
  isLoggedIn() {
    this.loggedIn.emit(this.getToken() !== null);
    if (this.getToken() == null) {
      this.myRoute.navigate(['login']);
    }
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem('auth-token');
    this.loggedIn.emit(false);
    this.myRoute.navigate(['login']);
  }
}
