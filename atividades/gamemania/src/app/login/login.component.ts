import { AnimationDriver } from '@angular/animations/browser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { User } from '../models/user';
import { VariosService } from '../services/varios.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router, private servicos: VariosService
  ) { }

  ngOnInit(): void {
  }
  iconfacebook = faFacebook;
  iconInstagram = faInstagram;
  iconLinkedin = faLinkedin;
  
  dadosUser = new User("","","");
  validarLogin(){
   
    this.servicos.login(this.dadosUser).subscribe((response) => {
     this.servicos.nomeusuario = this.dadosUser.email;
      this.router.navigate(['']);
    }, (respostaErro) => {
      alert(respostaErro.error);
    }
    
    );
  
  }

}
