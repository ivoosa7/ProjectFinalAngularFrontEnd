import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agenda } from './Agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {


  url = 'http://localhost:3000/agenda'

  constructor(private http: HttpClient) { }

  //1º Função
  getAgenda(): Observable<Agenda[]>{
    return this.http.get<Agenda[]>(this.url);
  }

  //2ª Função 
  addAgenda(agenda: Agenda): Observable<Agenda>{
    return this.http.post<Agenda>(this.url, agenda);
  }

  //3ª Função
  getAgendaById(id: number): Observable<Agenda>{
    return this.http.get<Agenda>(`${this.url}/${id}`);
  }
  
  
}
