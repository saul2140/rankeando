import { Component, OnInit, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.html',
  styleUrls: ['./personajes.css'],
  standalone: true,
  imports: [],
})
export class Personajes implements OnInit {
  personajes = signal<any[]>([]);
  cargando = signal<boolean>(true);
  error = signal<string>('');

  private apiKey =
    '15ab16dfd1054a9d5462519167d756c6c7d9bd2dd29091671e4def343fefeaee32c2607f5379d2d39b730c005f9d53a2888bd07e53b8aa0053f34706f146ed45';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarPersonajes();
  }

  cargarPersonajes() {
    const headers = new HttpHeaders({
      'api-key': this.apiKey,
    });

    this.http.get<any>('/proxy/api/operators', { headers }).subscribe({
      next: (data) => {
        console.log('Respuesta de la API:', data); // mira esto en la consola
        this.personajes.set(data); // igual hay que cambiar esto por data.operators o data.results
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error:', err);
        this.error.set('Error al cargar los operadores');
        this.cargando.set(false);
      },
    });
  }
}
