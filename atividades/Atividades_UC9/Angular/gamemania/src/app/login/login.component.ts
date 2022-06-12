import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  iconfacebook = faFacebook;
  iconInstagram = faInstagram;
  iconLinkedin = faLinkedin;
}
