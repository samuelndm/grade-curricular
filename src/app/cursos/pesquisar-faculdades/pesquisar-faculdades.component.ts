import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-pesquisar-faculdades',
  templateUrl: './pesquisar-faculdades.component.html',
  styleUrls: ['./pesquisar-faculdades.component.css']
})
export class PesquisarFaculdadesComponent implements OnInit {

  constructor(private _dataService: DataService, private _router: Router) { }

  data: any;
  faculdades: any[] = [];
  cursos: any[] = [];

  onSelect(id) {
    this._router.navigate(['/faculdade', id]);
  }

  ngOnInit() {
    this._dataService.getFaculdadesJson().subscribe(data => {
      this.data = data;
      this.faculdades = this.data.faculdades;
      this.faculdades.forEach(faculdade => {
        faculdade.cursos.forEach(cursoAtual => {
          this.cursos.push(cursoAtual);
        })
      })
    })
  }

}
