import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-curso-pesquisado',
  templateUrl: './curso-pesquisado.component.html',
  styleUrls: ['./curso-pesquisado.component.css']
})
export class CursoPesquisadoComponent implements OnInit {

  isLoading: boolean = true;
  faculdades: any;
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
      let nomeFaculdade = this.getNomeFaculdade(curso._id);
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
      
      let campusFaculdade = this.getCampusFaculdade(curso._id);
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
        if (curso.nome.toLowerCase() === this.nomeCurso.toLowerCase()) {
          this.cursos.push(curso);
        }
      })
    })
  }

  getNomeFaculdade(id) {
    let faculdade: any = this.getFaculdadeByCursoId(id)
    return faculdade.nome;
  }

  getCampusFaculdade(id) {
    let faculdade: any = this.getFaculdadeByCursoId(id)
    return faculdade.campus;
  }

  getLogoIdFaculdade(id) {
    let faculdade: any = this.getFaculdadeByCursoId(id)
    return faculdade.idLogo;
  }

  getIdFaculdade(id) {
    let faculdade: any = this.getFaculdadeByCursoId(id)
    return faculdade._id;
  }



  getFaculdadeByCursoId(id) {
    let faculdadeTarget: any;
    this.faculdades.forEach(faculdade => {
      faculdade.cursos.forEach(curso => {
        if (curso._id === id) {
          faculdadeTarget = faculdade;
        }
      })
    })

    return faculdadeTarget;
  }

  onSelectCurso(id) {
    this._router.navigate(['/curso/fluxograma', id]);
  }

  onSelectFaculdade(id) {
    this._router.navigate(['/cursos/faculdade', id]);
  }

  constructor(private _dataService: DataService, private _router: Router, private _activatedRoute: ActivatedRoute) { }




  ngOnInit() {
    this.nomeCurso = this._activatedRoute.snapshot.paramMap.get('id');
    this._dataService.getInstituicoes().subscribe(faculdades => {
      this.faculdades = faculdades;
      this.setCursos();
      this.filteredCursos = this.cursos;
      this.isLoading = false;
    })

  }



}
