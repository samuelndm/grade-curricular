import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-fluxog',
  templateUrl: './fluxog.component.html',
  styleUrls: ['./fluxog.component.css']
})
export class FluxogComponent implements OnInit {


  curso: any;
  nomeCurso: string;
  gradeCurso: any[];
  widthMateria: number = 137;
  widthFluxograma: number;
  
  corPadrao: Object = {
    "background": "white",
    "texto": "black",
  };
  corSelecionado: Object = {
    "background": "rgb(55, 202, 26)",
    "texto": "white",
  };
  corPreRequisito: Object = {
    "background": "rgb(235, 42, 42)",
    "texto": "white",
  };
  corLibera: Object = {
    "background": "rgb(25, 129, 248)",
    "texto": "white",
  };

  addGradeColor() {
    this.gradeCurso.forEach(periodo => {
      periodo.materias.forEach(materia => {
        materia.cor = this.corPadrao;
      });
    });
  }

  public updateGradeColorOnOver(codigo: number) {

    this.gradeCurso.forEach(periodo => {
      periodo.materias.forEach(materia => {

        if (materia.codigo == codigo) {
          materia.cor = this.corSelecionado;
        };

        materia.libera.forEach(idSuc => {
          if (idSuc == codigo) {
            materia.cor = this.corPreRequisito;
          }
        });

        materia.preRequisito.forEach(idPre => {
          if (idPre == codigo) {
            materia.cor = this.corLibera;
          }
        });
      });
    });
  }

  resetGradeColor() {
    this.gradeCurso.forEach(periodo => {
      periodo.materias.forEach(materia => {
        materia.cor = this.corPadrao;
      })
    })
  }



  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCurso().subscribe(data => {
      this.curso = data
      this.nomeCurso = this.curso.curso
      this.gradeCurso = this.curso.grade
      this.widthFluxograma = this.curso.grade.length * this.widthMateria
      this.addGradeColor();
    })
  }



}
