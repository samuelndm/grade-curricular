import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  data: any;

  getFaculdadesJson() {
    const localUrl = 'assets/data/faculdades.json';
    return this.http.get(localUrl);

  };

  getFaculdades() {
    this.getFaculdadesJson().subscribe(data => {
      this.data = data;
      return this.data.faculdades;
    })
  }

  getCursos() {
    let faculdades: any[];
    let cursos: any;

    this.getFaculdadesJson().subscribe(data => {
      this.data = data;
      faculdades = this.data.faculdades;
      cursos = this.getCursosAux(faculdades);
      
    })
    
  }

  private getCursosAux(faculdades) {
    let cursos = [];
    faculdades.forEach(faculdade => {
      faculdade.cursos.forEach(cursoAtual => {
        cursos.push(cursoAtual);
      })
    })
    return cursos;
  }
}
