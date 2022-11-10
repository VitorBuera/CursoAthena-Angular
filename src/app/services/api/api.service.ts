import { Injectable } from '@angular/core';
import { Pratos } from '../../models/pratos/pratos';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Peixes } from 'src/app/models/peixes/peixes';
import { delay, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

 getPeixes() :Observable<Peixes[]>{
     return this.http.get<any>(`${environment.apiBase}species`);
  }
}
