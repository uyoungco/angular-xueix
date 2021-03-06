import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  login() {
    this.router.navigate(['project'])
  }

  onEnter(event) {
    if (event.keyCode === 13) {
      alert('登陆')
    }
  }
}
