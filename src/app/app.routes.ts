import { Routes } from '@angular/router';
import { Jugadores } from './components/jugadores/jugadores';
import { Ranking } from './components/ranking/ranking';
import { Equipos } from './components/equipos/equipos';
import { Personajes } from './components/personajes/personajes';

export const routes: Routes = [
  { path: '', component: Jugadores },
  { path: 'ranking', component: Ranking },
  { path: 'equipos', component: Equipos },
  { path: 'personajes', component: Personajes },
  { path: '**', redirectTo: '' },
];
