import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EquiposService, Equipo } from '../../services/equipos';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './equipos.html',
  styleUrls: ['./equipos.css'],
})
export class Equipos implements OnInit {
  private equiposService = inject(EquiposService);

  equipos: Equipo[] = [];

  ngOnInit(): void {
    this.equiposService.getEquipos().subscribe((data) => {
      this.equipos = data;
    });
  }
}
