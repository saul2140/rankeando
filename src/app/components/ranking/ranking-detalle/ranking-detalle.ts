import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RankingService, Jugador } from '../../../services/ranking';

@Component({
  selector: 'app-ranking-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ranking-detalle.html',
  styleUrls: ['./ranking-detalle.css'],
})
export class RankingDetalleComponent implements OnInit {
  jugador: Jugador | undefined;
  private route = inject(ActivatedRoute);
  private rankingService = inject(RankingService);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.rankingService.getJugador(id).subscribe((data) => {
      this.jugador = data;
      this.cdr.detectChanges();
    });
  }
}
