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
  nomeCurso: String;


  setCursos() {
    this.faculdades.forEach(faculdade => {
      faculdade.cursos.forEach(curso => {
        if (curso.curso === this.nomeCurso) {
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
    })

  }



}
