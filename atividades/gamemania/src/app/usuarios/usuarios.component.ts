import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { User } from '../models/user';
import { VariosService } from '../services/varios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private router: Router, private servicos: VariosService) { }

  ngOnInit(): void {
   }

   iconfacebook = faFacebook;
   iconInstagram = faInstagram;
   iconLinkedin = faLinkedin;
   
   dadosUser = new User("","","");
   CadastrarUsuario(){
    
     this.servicos.cadusu(this.dadosUser).subscribe((response) => {
       this.router.navigate(['']);
     }, (respostaErro) => {
       alert(respostaErro.error);
     }
     
     );
   
   }
  
}