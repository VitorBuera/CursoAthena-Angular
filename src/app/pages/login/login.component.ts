import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  nome: string = "";
  senha : string = "";
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cadastrar(){
    this.router.navigate(['/cadastro']);
  }

  login(){
    var usuarios = [];
    usuarios = JSON.parse(localStorage.getItem("Usuarios") ||"[]");

    let achou = usuarios.find( (usuario: any) => usuario["nome"] == this.nome && usuario["senha"] == this.senha);
    if(achou){
      this.router.navigate(['/home']);
    }else{
      alert("Deu ruim!");
    }
  }
}
