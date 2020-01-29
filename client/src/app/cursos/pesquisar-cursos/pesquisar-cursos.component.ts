import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-pesquisar-cursos',
  templateUrl: './pesquisar-cursos.component.html',
  styleUrls: ['./pesquisar-cursos.component.css']
})
export class PesquisarCursosComponent implements OnInit {

  constructor(private _dataService: DataService, private _router: Router) { }

  cursos: any;
  nomeCursos: string[] = [];
  filteredNomeCursos: string[];
  private _searchTerm: string;

  get searchTerm() {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredNomeCursos = this.filterCursos(value);
  }

  filterCursos(value: string) {
    return this.nomeCursos.filter(curso => {
      let new_value = value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Removendo letras acentuadas
      let new_curso = curso.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Removendo letras acentuadas
      return new_curso.toLowerCase().indexOf(new_value.toLowerCase()) !== -1;
      
    })
  }



  setCursos() {
    this.cursos.forEach(curso => {
        if (!(this.nomeCursos.includes(curso.nome))) {
          this.nomeCursos.push(curso.nome);
        }
    })
  }

  sortCursos() {
    this.nomeCursos.sort((curso1, curso2) => {
      if (curso1 > curso2) {
        return 1;
      }

      if (curso1 < curso2) {
        return -1;
      }
    })
  }

  onSelect(curso) {
    this._router.navigate(['/cursos/curso-pesq', curso]);
  }

  ngOnInit() {
    this._dataService.getCursos().subscribe(data => {
      this.cursos = data;
      this.setCursos();
      this.sortCursos();
      this.filteredNomeCursos = this.nomeCursos;
    })
  }

}
