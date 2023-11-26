import { Component } from '@angular/core';
import { Projeto } from 'src/app/model/projeto.model';


@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {

  listaProjetos: Projeto[] = [
    {
      id: 1,
      nome: "Projeto Educação sem Distinção",
      descricao: "O projeto tem por objetivo a reunião, produção, sistematização e divulgação de dados, informações e conhecimento sobre o cenário da política pública educacional, com o propósito de contribuir para o direcionamento estratégico dos esforços empreendidos pelo MPRJ, bem como para o empoderamento dos mecanismos de controle social, essenciais quando estamos tratando de políticas públicas. Desenvolvido em duas fases, a primeira fase contempla serviços a serem desenvolvidos pelo MPRJ e a segunda fase, desenvolvida posteriormente, contempla o desenvolvimento de um sistema para comunicação individual de exclusão, infrequência e evasão escolar com geração de relatórios gerenciais."
    },
    {
      id: 2,
      nome: "Panorama Educação",
      descricao: "Panorama Educação é uma plataforma de visualização de dados que analisa indicadores educacionais do estado do Rio de Janeiro com o objetivo de contribuir para o direcionamento estratéfico das ações empreendidas pelo MPRJ na garantia do direito à Educação. Organizado em diálogo com o Plano Nacional de Educação, possibilita o monitoramento do cumprimento das metas pelos municípios fluminenses."
    },
  ]
projeto: any;
}
