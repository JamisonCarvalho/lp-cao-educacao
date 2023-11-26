import { Component, Input } from '@angular/core';
import { Funcionario } from 'src/app/model/funcionario.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() funcionario: Funcionario = {
    nome: "",
    funcao: "",
    email: "",
    linkedin:""
  }
}
