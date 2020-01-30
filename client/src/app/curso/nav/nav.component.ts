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

  faculdade: any;
  curso: any;
  idCurso: string;
  nomeCurso: string;
  tipoCurso: string;
  turnoCurso: string;
  nomeFaculdade: string;
  campusFaculdade: string;
  idLogoFaculdade: string;
  idFaculdade: number;

  setCursoById(id) {
    console.log(this.faculdade)
    this.faculdade.cursos.forEach(curso => {
      if (curso._id == id) {
        this.curso = curso;
      }
    })

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
    this.idCurso = this._activatedRoute.snapshot.paramMap.get('id');
    this._dataService.getInstituicaoByCursoId(this.idCurso).subscribe(faculdade => {
      this.faculdade = faculdade;
      this.nomeFaculdade = this.faculdade.nome;
      this.campusFaculdade = this.faculdade.campus;
      this.idLogoFaculdade = this.faculdade.idLogo;
      this.idFaculdade = this.faculdade._id;
      
      this.setCursoById(this.idCurso);
      this.nomeCurso = this.curso.nome;
      this.tipoCurso = this.curso.tipo;
      this.turnoCurso = this.curso.turno;
      
    })
  }
}