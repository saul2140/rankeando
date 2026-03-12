import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'https://api.r6data.eu/api/operators';

  constructor(private http: HttpClient) {}

  getDatos(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer 15ab16dfd1054a9d5462519167d756c6c7d9bd2dd29091671e4def343fefeaee32c2607f5379d2d39b730c005f9d53a2888bd07e53b8aa0053f34706f146ed45`, // pon aquí tu key
    });
    return this.http.get(this.apiUrl, { headers });
  }
}
