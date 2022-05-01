import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {

  private API_PLAYERS = "http://localhost:3000/players";

  constructor(private http: HttpClient) { }

  getAlllPlayers(): Observable<any>{
    return this.http.get(this.API_PLAYERS);
  }

  getPlayer(id: number): Observable<any>{
    return this.http.get(`${this.API_PLAYERS}/${id}`);
  }

  updatePlayer(player: any): Observable<any>{
    return this.http.put(`${this.API_PLAYERS}/${player.id}`, player)
  }

}
