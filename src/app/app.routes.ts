import { Routes } from '@angular/router';
import { Jugadores } from './components/jugadores/jugadores';
import { Ranking } from './components/ranking/ranking';

export const routes: Routes = [
  { path: '', component: Jugadores },
  { path: 'ranking', component: Ranking },
  { path: '**', redirectTo: '' },
];
