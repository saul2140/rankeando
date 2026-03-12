import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Jugador {
  id: number;
  nickname: string;
  real_name: string;
  nationality: string;
  role: string;
  photo_url: string;
  team_id: number;
}

export interface Equipo {
  id: number;
  name: string;
  tag: string;
  country: string;
  logo_url: string;
  players: Jugador[];
}

@Injectable({
  providedIn: 'root',
})
export class EquiposService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/teams';

  getEquipos(): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(this.apiUrl);
  }
}
