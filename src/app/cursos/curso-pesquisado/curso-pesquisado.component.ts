import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-curso-pesquisado',
  templateUrl: './curso-pesquisado.component.html',
  styleUrls: ['./curso-pesquisado.component.css']
})
export class CursoPesquisadoComponent implements OnInit {

  nomeCurso: String;
  cursosObject: any;
  cursos = [];
  
  
  getCursosByName(nomeCurso) {
    let cursoPesquisadoList = [];
    this.cursos.forEach(curso => {
      if (curso.curso === nomeCurso) {
        cursoPesquisadoList.push(curso);
      }
    })

    return cursoPesquisadoList;

  }

  constructor(private dataService: DataService, private _router: ActivatedRoute) { }

  

  

  ngOnInit() {
    this.nomeCurso = this._router.snapshot.paramMap.get('id');
    this.dataService.getCursos().subscribe(data => {
      this.cursosObject = data;
      this.cursos = this.cursosObject.cursos;
    })
    

  }



}
