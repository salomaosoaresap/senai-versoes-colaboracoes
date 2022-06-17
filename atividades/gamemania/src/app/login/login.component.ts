import { AnimationDriver } from '@angular/animations/browser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  iconfacebook = faFacebook;
  iconInstagram = faInstagram;
  iconLinkedin = faLinkedin;
  
  dadosUser = new User("","");
  validarLogin(){
    if(this.dadosUser.email == 'salomao@ceap.br' && this.dadosUser.senha == '123'){
      // alert('Senha ok!');
      this.router.navigate(['']);
    }else{ alert('Email/Senha inválidos!');} 
  }

}
