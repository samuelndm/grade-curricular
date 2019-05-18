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
  widthMateria: number = 152;
  widthFluxograma: number;
  
  corPadrao: Object = {
    "background": "white",
    "texto": "black",
    "shadowColor": "inset 0px 0px 0px 2px rgb(255, 255, 255)"
  };
  corSelecionado: Object = {
    "background": "rgb(55, 202, 26)",
    "texto": "white",
    "shadowColor": "inset 0px 0px 0px 2px rgb(255, 255, 255)"
  };
  corPreRequisito: Object = {
    "background": "rgb(200, 200, 200)",
    "texto": "black",
    "shadowColor": "inset 0px 0px 0px 1px rgb(250, 133, 133)"
  };
  corLibera: Object = {
    "background": "rgb(200, 200, 200)",
    "texto": "black",
    "shadowColor": "inset 0px 0px 0px 1px rgb(92, 201, 252)"
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
