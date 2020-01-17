import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private _dataService: DataService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _location: Location) { }

  data: any;
  faculdades: any;
  curso: any;
  idCurso: number;
  nomeCurso: string;
  tipoCurso: string;
  turnoCurso: string;
  nomeFaculdade: string;
  campusFaculdade: string;
  idLogoFaculdade: string;
  idFaculdade: number;

  setCursoById(id) {
    this.faculdades.forEach(faculdade => {
      faculdade.cursos.forEach(cursoAtual => {
        if (cursoAtual.idCurso === id) {
          this.curso = cursoAtual;
        }
      })
    })
  }

  setNomeFaculdade(id) {
    let faculdade: any = this.getFaculdadeByCursoId(id)
    this.nomeFaculdade = faculdade.faculdade;
  }

  setCampusFaculdade(id) {
    let faculdade: any = this.getFaculdadeByCursoId(id)
    this.campusFaculdade = faculdade.campus;
  }

  setIdLogoFaculdade(id) {
    let faculdade: any = this.getFaculdadeByCursoId(id)
    this.idLogoFaculdade = faculdade.idLogoFaculdade;
  }

  setIdFaculdade(id) {
    let faculdade: any = this.getFaculdadeByCursoId(id)
    this.idFaculdade = faculdade.idFaculdade;
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

  onSelectVoltar() {
    this._location.back();
  }

  onSelectFluxograma(id) {
    this._router.navigate(['/curso/fluxograma', id]);
  }

  onSelectMinhaGrade(id) {
    this._router.navigate(['/curso/minhagrade', id]);
  }

  onSelectFaculdade(id) {
    this._router.navigate(['/cursos/faculdade', id]);
  }



  ngOnInit() {
    this.idCurso = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._dataService.getFaculdadesJson().subscribe(data => {
      this.data = data;
      this.faculdades = this.data.faculdades;
      this.setCursoById(this.idCurso);
      this.nomeCurso = this.curso.curso;
      this.tipoCurso = this.curso.tipoCurso;
      this.turnoCurso = this.curso.turno;
      this.setNomeFaculdade(this.idCurso);
      this.setCampusFaculdade(this.idCurso);
      this.setIdLogoFaculdade(this.idCurso);
      this.setIdFaculdade(this.idCurso);
    })
  }
}