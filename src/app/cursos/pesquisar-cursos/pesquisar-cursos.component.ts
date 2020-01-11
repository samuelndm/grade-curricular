import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-pesquisar-cursos',
  templateUrl: './pesquisar-cursos.component.html',
  styleUrls: ['./pesquisar-cursos.component.css']
})
export class PesquisarCursosComponent implements OnInit {

  constructor(private _dataService: DataService, private _router: Router) { }

  data: any;
  faculdades: any[];
  cursos: string[] = [];
  filteredCursos: string[];
  private _searchTerm: string;

  get searchTerm() {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredCursos = this.filterCursos(value);
  }

  filterCursos(value: string) {
    return this.cursos.filter(curso => {
      let new_value = value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Removendo letras acentuadas
      let new_curso = curso.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Removendo letras acentuadas
      return new_curso.toLowerCase().indexOf(new_value.toLowerCase()) !== -1;
      
    })
  }



  setCursos() {
    this.faculdades.forEach(faculdade => {
      faculdade.cursos.forEach(cursoAtual => {
        if (!(this.cursos.includes(cursoAtual.curso))) {
          this.cursos.push(cursoAtual.curso);
        }
      })
    })
  }

  sortCursos() {
    this.cursos.sort((curso1, curso2) => {
      if (curso1 > curso2) {
        return 1;
      }

      if (curso1 < curso2) {
        return -1;
      }
    })
  }

  onSelect(curso) {
    this._router.navigate(['/curso', curso]);
  }

  ngOnInit() {
    this._dataService.getFaculdadesJson().subscribe(data => {
      this.data = data;
      this.faculdades = this.data.faculdades;
      this.setCursos();
      this.sortCursos();
      this.filteredCursos = this.cursos;
    })
  }

}
