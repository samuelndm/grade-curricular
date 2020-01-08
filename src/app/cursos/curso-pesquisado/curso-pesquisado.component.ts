import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-curso-pesquisado',
  templateUrl: './curso-pesquisado.component.html',
  styleUrls: ['./curso-pesquisado.component.css']
})
export class CursoPesquisadoComponent implements OnInit {

  data: any;
  faculdades: any[];
  cursos: any[] = [];
  filteredCursos: any[];
  nomeCurso: String;
  private _searchFaculdade: string;
  private _searchCampus: string;
  private _searchTurno: string;

  get searchFaculdade() {
    return this._searchFaculdade;
  }

  set searchFaculdade(value: string) {
    this._searchFaculdade = value;
    this.filteredCursos = this.filterCursosByFaculdade(value);
  }

  filterCursosByFaculdade(value: string) {
    return this.cursos.filter(curso => {
      let nomeFaculdade = this.getNomeFaculdade(curso.idCurso);
      let newValue = value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Removendo letras acentuadas
      let newFaculdade =  nomeFaculdade.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Removendo letras acentuadas
      return newFaculdade.toLowerCase().indexOf(newValue.toLowerCase()) !== -1;
    })
  }


  get searchCampus() {
    return this._searchCampus;
  }

  set searchCampus(value: string) {
    this._searchCampus = value;
    this.filteredCursos = this.filterCursosByCampus(value);
  }

  filterCursosByCampus(value: string) {
    return this.cursos.filter(curso => {
      
      let campusFaculdade = this.getCampusFaculdade(curso.idCurso);
      let newValue = value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Removendo letras acentuadas
      let newCampus =  campusFaculdade.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Removendo letras acentuadas
      return newCampus.toLowerCase().indexOf(newValue.toLowerCase()) !== -1;
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
      let newValue = value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Removendo letras acentuadas
      let newTurno =  curso.turno.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Removendo letras acentuadas
      return newTurno.toLowerCase().indexOf(newValue.toLowerCase()) !== -1;
    })
  }


  setCursos() {
    this.faculdades.forEach(faculdade => {
      faculdade.cursos.forEach(curso => {
        if (curso.curso.toLowerCase() === this.nomeCurso.toLowerCase()) {
          this.cursos.push(curso);
        }
      })
    })
  }

  getNomeFaculdade(id) {
    let faculdade: any = this.getFaculdadeByCursoId(id)
    return faculdade.faculdade;
  }

  getCampusFaculdade(id) {
    let faculdade: any = this.getFaculdadeByCursoId(id)
    return faculdade.campus;
  }

  getLogoIdFaculdade(id) {
    let faculdade: any = this.getFaculdadeByCursoId(id)
    return faculdade.idLogoFaculdade;
  }

  getIdFaculdade(id) {
    let faculdade: any = this.getFaculdadeByCursoId(id)
    return faculdade.idFaculdade;
  }



  getFaculdadeByCursoId(idCurso) {
    let faculdadeTarget: any;
    this.faculdades.forEach(faculdade => {
      faculdade.cursos.forEach(curso => {
        if (curso.idCurso === idCurso) {
          faculdadeTarget = faculdade;
        }
      })
    })

    return faculdadeTarget;
  }

  onSelectCurso(id) {
    this._router.navigate(['/fluxograma', id]);
  }

  onSelectFaculdade(id) {
    this._router.navigate(['/faculdade', id]);
  }

  constructor(private _dataService: DataService, private _router: Router, private _activatedRoute: ActivatedRoute) { }




  ngOnInit() {
    this.nomeCurso = this._activatedRoute.snapshot.paramMap.get('id');
    this._dataService.getFaculdadesJson().subscribe(data => {
      this.data = data;
      this.faculdades = this.data.faculdades;
      this.setCursos();
      this.filteredCursos = this.cursos;
    })

  }



}
