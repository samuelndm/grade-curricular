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

  data: any;
  faculdades: any[];
  cursos: string[] = [];


  setCursos() {
    this.faculdades.forEach(faculdade => {
      faculdade.cursos.forEach(cursoAtual => {
        if (!(this.cursos.includes(cursoAtual.curso))) {
          this.cursos.push(cursoAtual.curso);
        }
      })
    })
  }

  sortCursos() {
    this.cursos.sort((curso1, curso2) => {
      if (curso1 > curso2) {
        return 1;
      }

      if (curso1 < curso2) {
        return -1;
      }
    })
  }

  onSelect(curso) {
    this._router.navigate(['/curso', curso]);
  }

  ngOnInit() {
    this._dataService.getFaculdadesJson().subscribe(data => {
      this.data = data;
      this.faculdades = this.data.faculdades;
      this.setCursos();
      this.sortCursos();
    })
  }

}
