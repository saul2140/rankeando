import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Jugador {
  nombre: string;
  puntos: number;
  foto: string;
}

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ranking.html',
  styleUrl: './ranking.css',
})
export class Ranking {
  jugadores: Jugador[] = [
    {
      nombre: 'Beaulo',
      puntos: 2500,
      foto: 'https://liquipedia.net/commons/images/thumb/Beaulo.jpg/200px-Beaulo.jpg',
    },
    {
      nombre: 'Shaiiko',
      puntos: 2400,
      foto: 'https://liquipedia.net/commons/images/thumb/Shaiiko.jpg/200px-Shaiiko.jpg',
    },
    {
      nombre: 'Pengu',
      puntos: 2300,
      foto: 'https://liquipedia.net/commons/images/thumb/Pengu.jpg/200px-Pengu.jpg',
    },
  ];

  get rankingOrdenado() {
    return [...this.jugadores].sort((a, b) => b.puntos - a.puntos);
  }
}
