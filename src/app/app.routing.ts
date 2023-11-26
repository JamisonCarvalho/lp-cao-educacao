import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./pages/header/header.component";
import { EquipeComponent } from "./pages/equipe/equipe.component";
import { ProjetosComponent } from "./pages/projetos/projetos.component";
import { ObjetivosComponent } from "./pages/objetivos/objetivos.component";
import { DetalheProjetoComponent } from "./components/detalhe-projeto/detalhe-projeto.component";

const routes: Routes = [
    {path: '', component: HeaderComponent},
    {path: 'equipe', component: EquipeComponent},
    {path: 'projetos', component: ProjetosComponent},
    {path:'detalhe', component: DetalheProjetoComponent},
    {path: 'objetivos', component: ObjetivosComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }