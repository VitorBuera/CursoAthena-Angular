import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
nome:string = "";
senha:string = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cadastrar(){
    var usuario = { nome: this.nome, senha: this.senha };
    var usuarios = JSON.parse(localStorage.getItem("Usuarios") || "[]");

    usuarios.push({
      nome: this.nome,
      senha: this.senha
    });

    localStorage.setItem("Usuarios", JSON.stringify(usuarios));
    this.router.navigate(['/']);
  }
}
