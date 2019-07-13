import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private form;
  constructor(private auth: AuthserviceService, private myRoute: Router,
    private formBuilder: FormBuilder, private activeRoute: ActivatedRoute) { 
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.myRoute.url == '/logout') {
      this.auth.logout();
    }
  }
  login() {
    if (this.form.valid) {
      this.auth.sendToken(this.form.value.email);
      this.myRoute.navigate(['home']);
    }
}
}
