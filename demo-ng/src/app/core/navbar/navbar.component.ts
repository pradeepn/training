import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private auth: AuthService) {
    this.auth.loggedIn.subscribe(login => this.isLoggedIn = login);
  }

  ngOnInit() {
  }

}
