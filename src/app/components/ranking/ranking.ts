import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RankingService, Jugador } from '../../services/ranking';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ranking.html',
  styleUrls: ['./ranking.css'],
})
export class Ranking implements OnInit {
  private rankingService = inject(RankingService);
  private cdr = inject(ChangeDetectorRef);

  jugadores: Jugador[] = [];

  ngOnInit(): void {
    this.rankingService.getRanking().subscribe((data) => {
      console.log('Datos recibidos:', data);
      this.jugadores = data;
      this.cdr.detectChanges();
    });
  }
}
