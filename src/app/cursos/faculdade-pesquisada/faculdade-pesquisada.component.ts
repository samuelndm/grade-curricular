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

  setFaculdadeById(id) {
    this.faculdades.forEach(faculdade => {
      if (faculdade.idFaculdade === id) {
        this.faculdade = faculdade;
      }
    })
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
    })
  }

}
