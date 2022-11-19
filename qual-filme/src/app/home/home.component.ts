import { Component, Input } from '@angular/core';
import { Filmes } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})  

export class HomeComponent {

  listaDeFilmes: Filmes[] = [
    {Title: 'Avatar'},
    {Title: 'Um Estranho no Paraiso'},
    {Title: 'Doutor Estranho'},
    {Title: 'Superman'},
    {Title: 'Matrix'},
    {Title: 'Alice no Pais Das Maravilhas'},
    {Title: 'O Tumulo dos Vagalumes'},
    {Title: 'Seven'},
    {Title: 'A Espera de Um Milagre'},
    {Title: 'Forrest Gump'},
    {Title: 'Mother'},
    {Title: 'O Silencio dos Inocentes'},
]
}