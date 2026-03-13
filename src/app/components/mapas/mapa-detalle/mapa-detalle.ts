import { Component, OnInit, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle-mapa',
  templateUrl: './mapa-detalle.html',
  styleUrls: ['./mapa-detalle.css'],
  standalone: true,
  imports: [RouterLink],
})
export class MapaDetalle implements OnInit {
  mapa = signal<any>(null);
  cargando = signal<boolean>(true);
  error = signal<string>('');

  private apiKey =
    '15ab16dfd1054a9d5462519167d756c6c7d9bd2dd29091671e4def343fefeaee32c2607f5379d2d39b730c005f9d53a2888bd07e53b8aa0053f34706f146ed45';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
  ) {}

ngOnInit() {
  const name = this.route.snapshot.paramMap.get('name');
  const headers = new HttpHeaders({ 'api-key': this.apiKey });

  this.http.get<any[]>('/proxy/api/maps', { headers }).subscribe({
    next: (data) => {
      const encontrado = data.find((m) => m.name === name);
      this.mapa.set(encontrado);
      this.cargando.set(false);
    },
    error: () => {
      this.error.set('Error al cargar');
      this.cargando.set(false);
    },
  });
}
}
