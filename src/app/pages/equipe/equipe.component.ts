import { Funcionario } from 'src/app/model/funcionario.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent { 
  listaFuncionarios: Funcionario[] = [ 
    {
      nome: "Hugo Nicolau Barbosa de Gusmão",
      funcao: "Líder de Transformação e Tradução de Dados",
      email: "hugonicolau@email.com",
      linkedin: "linkedin.com.br"
    },
    {
      nome: "Isabella Cunha",
      funcao: "Estagiaria de Design",
      email: "isabellacunha@email.com",
      linkedin: "linkedin.com.br"
    },
    {
      nome: "Larissa Lima",
      funcao: "Líder de projeto",
      email: "larissalima@email.com",
      linkedin: "linkedin.com.br"
    }, 
    {
      nome: "Jamison Carvalho dos Santos",
      funcao: "Estagiario FrontEnd",
      email: "jamisoncarvalho26@gmail.com",
      linkedin: "https://www.linkedin.com/in/jamisoncarvalho/"
    },
  ]
}
