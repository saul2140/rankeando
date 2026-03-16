import { Routes } from '@angular/router';
import { Jugadores } from './components/jugadores/jugadores';
import { Equipos } from './components/equipos/equipos';
import { Personajes } from './components/personajes/personajes';
import { EquiposDetalleComponent } from './components/equipos/equipo-detalle/equipo-detalle';
import { Mapas } from './components/mapas/mapas';
import { MapaDetalle } from './components/mapas/mapa-detalle/mapa-detalle';
import { Ranking } from './components/ranking/ranking';
import { RankingDetalleComponent } from './components/ranking/ranking-detalle/ranking-detalle';


export const routes: Routes = [
  { path: '', component: Jugadores },
  { path: 'personajes', component: Personajes },
  { path: 'mapas', component: Mapas },
  { path: 'mapas/:name', component: MapaDetalle },
  { path: 'equipos', component: Equipos }, // Lista de equipos
  { path: 'equipos/:id', component: EquiposDetalleComponent }, // Detalle por id
  { path: 'ranking', component: Ranking },
  { path: 'ranking/:id', component: RankingDetalleComponent },
];
