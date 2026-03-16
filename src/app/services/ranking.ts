import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Jugador {
  id: number;
  nickname: string;
  country: string | null;
  mmr: number;
  matches_played: number;
  kd: number;
}

@Injectable({
  providedIn: 'root',
})
export class RankingService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api';

  getRanking(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(`${this.apiUrl}/ranking`);
  }

  getJugador(id: number): Observable<Jugador> {
    return this.http.get<Jugador>(`${this.apiUrl}/ranking/${id}`);
  }
}
