import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCurso(){
    return this.http.get('https://api.myjson.com/bins/r12o0');
  };
}
