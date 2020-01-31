import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  
  apiUrl = 'api/'
  // apiUrl = 'http://localhost:8080/api/'
  
  getInstituicoes() {
    return this.http.get(this.apiUrl + 'instituicao');
  }

  getInstituicaoById(id) {
    return this.http.get(this.apiUrl + 'instituicao/' + id)
  }

  getInstituicaoByCursoId(id) {
    return this.http.get(this.apiUrl + 'instituicao/cursoId/' + id)
  }

  getCursos() {
    return this.http.get(this.apiUrl + 'curso')
  }

  getCursoById(id) {
    return this.http.get(this.apiUrl + 'curso/' + id)
  }

  getCursosByNome(nome) {
    return this.http.get(this.apiUrl + 'curso/nome/' + nome)
  }
}