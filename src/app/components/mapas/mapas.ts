import { Component, OnInit, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.html',
  styleUrls: ['./mapas.css'],
  standalone: true,
  imports: [RouterLink],
})
export class Mapas implements OnInit {
  mapas = signal<any[]>([]);
  cargando = signal<boolean>(true);
  error = signal<string>('');

  private apiKey =
    '15ab16dfd1054a9d5462519167d756c6c7d9bd2dd29091671e4def343fefeaee32c2607f5379d2d39b730c005f9d53a2888bd07e53b8aa0053f34706f146ed45';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit() {
    const headers = new HttpHeaders({ 'api-key': this.apiKey });
    this.http.get<any[]>('/proxy/api/maps', { headers }).subscribe({
      next: (data) => {
        this.mapas.set(data);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Body:', err.error);
        this.error.set('Error al cargar');
        this.cargando.set(false);
      },
    });
  }

  verDetalle(safename: string) {
    this.router.navigate(['/mapas', safename]);
  }
}
