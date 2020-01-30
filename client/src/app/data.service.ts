import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  
  apiUrl = 'api/'
  // localUrl = 'assets/data/faculdades.json'
  
  getInstituicoes() {
    return this.http.get('instituicao');
  }

  getInstituicaoById(id) {
    return this.http.get('instituicao/' + id)
  }

  getInstituicaoByCursoId(id) {
    return this.http.get('instituicao/cursoId/' + id)
  }

  getCursos() {
    return this.http.get('curso')
  }

  getCursoById(id) {
    return this.http.get('curso/' + id)
  }

  getCursosByNome(nome) {
    return this.http.get('curso/nome/' + nome)
  }
}