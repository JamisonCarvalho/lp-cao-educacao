import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './pages/header/header.component';
import { EquipeComponent } from './pages/equipe/equipe.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { ObjetivosComponent } from './pages/objetivos/objetivos.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetalheProjetoComponent } from './components/detalhe-projeto/detalhe-projeto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EquipeComponent,
    ProjetosComponent,
    ObjetivosComponent,
    CardComponent,
    NavbarComponent,
    DetalheProjetoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
