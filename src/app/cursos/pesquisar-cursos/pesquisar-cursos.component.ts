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

  cursosObject: any;
  cursos: any[];

  onSelect(curso) {
    this._router.navigate(['/curso', curso]);
  }

  ngOnInit() {
    this._dataService.getCursos().subscribe(data =>{
      this.cursosObject = data;
      this.cursos = this.cursosObject.cursos;
    })
  }

}
