import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCurso(){
    return this.http.get('http://www.mocky.io/v2/5ce0769b3300008d2a608c30');
  };
}
