import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-faculdade-pesquisada',
  templateUrl: './faculdade-pesquisada.component.html',
  styleUrls: ['./faculdade-pesquisada.component.css']
})
export class FaculdadePesquisadaComponent implements OnInit {

  constructor(private _dataService: DataService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  data: any;
  faculdades: any;
  faculdade: any;
  idFaculdade: number;
  cursos: any;
  filteredCursos: any;
  private _searchCurso: string;
  private _searchTurno: string;

  get searchCurso() {
    return this._searchCurso;
  }

  set searchCurso(value: string) {
    this._searchCurso = value;
    this.filteredCursos = this.filterCursosByName(value);
  }

  filterCursosByName(value: string) {
    return this.cursos.filter(curso => {
      let newValue = value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Removendo letras acentuadas
      let newCurso =  curso.curso.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Removendo letras acentuadas
      return newCurso.toLowerCase().indexOf(newValue.toLowerCase()) !== -1;
    })
  }

  get searchTurno() {
    return this._searchTurno;
  }

  set searchTurno(value: string) {
    this._searchTurno = value;
    this.filteredCursos = this.filterCursosByTurno(value);
  }

  filterCursosByTurno(value: string) {
    return this.cursos.filter(curso => {
      let newValue = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      let newTurno = curso.turno.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return newTurno.toLowerCase().indexOf(newValue.toLowerCase()) !== -1;
    })
  }


  setFaculdadeById(id) {
    this.faculdades.forEach(faculdade => {
      if (faculdade.idFaculdade === id) {
        this.faculdade = faculdade;
      }
    })
  }

  sortCursos() {
    this.cursos.sort((curso1, curso2) => {
      if (curso1.curso > curso2.curso) {
        return 1;
      }

      if (curso1.curso < curso2.curso) {
        return -1;
      }

      return 0;
    });
  }

  onSelectCurso(id) {
    this._router.navigate(['/fluxograma', id]);
  }

  onSelectFaculdade(id) {
    this._router.navigate(['/faculdade', id]);
  }

  ngOnInit() {
    this.idFaculdade = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._dataService.getFaculdadesJson().subscribe(data => {
      this.data = data;
      this.faculdades = this.data.faculdades;
      this.setFaculdadeById(this.idFaculdade);
      this.cursos = this.faculdade.cursos;
      this.sortCursos();
      this.filteredCursos = this.cursos;

    })
  }

}
