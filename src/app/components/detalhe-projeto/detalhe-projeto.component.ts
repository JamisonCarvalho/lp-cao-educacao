import { Component, Input } from '@angular/core';
import { Projeto } from 'src/app/model/projeto.model';

@Component({
  selector: 'app-detalhe-projeto',
  templateUrl: './detalhe-projeto.component.html',
  styleUrls: ['./detalhe-projeto.component.css']
})
export class DetalheProjetoComponent {

  @Input() projeto: Projeto = {
    id: 0,
    nome: "",
    descricao: ""
  }

}
