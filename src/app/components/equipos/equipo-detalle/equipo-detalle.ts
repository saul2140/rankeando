import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { EquiposService, Equipo } from '../../../services/equipos';

@Component({
  selector: 'app-equipos-detalle',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './equipo-detalle.html',
  styleUrls: ['./equipo-detalle.css'],
})
export class EquiposDetalleComponent implements OnInit {
  equipo: Equipo | undefined;
  private route = inject(ActivatedRoute);
  private equiposService = inject(EquiposService);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.equiposService.getEquipos().subscribe((equipos) => {
      this.equipo = equipos.find((e) => e.id === id);
      this.cdr.detectChanges(); // forzar actualización de la vista
    });
  }
}
