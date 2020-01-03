import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-fluxog',
  templateUrl: './fluxog.component.html',
  styleUrls: ['./fluxog.component.css']
})
export class FluxogComponent implements OnInit {

 /**verde: 58, 173, 67 
  * azul: 70, 70, 255
 */


  curso: any;
  nomeCurso: string;
  gradeCurso: any[];
  widthMateria: number = 152;
  widthFluxograma: number;
  
  corPadrao: Object = {
    "background": "white",
    "texto": "black",
    "shadowColor": "inset 0px 0px 0px 2px rgb(255, 255, 255, 0)",
    "border": "1px solid rgb(206, 206, 206)"
  };
  corSelecionado: Object = {
    "background": "#71C837",
    "texto": "white",
    "shadowColor": "inset 0px 0px 0px 2px rgb(255, 255, 255)",
    "border": "1px solid rgb(0, 0, 0, 0)"
  };
  corPreRequisito: Object = {
    "background": "rgb(200, 200, 200)",
    "texto": "black",
    "shadowColor": "inset 0px 0px 0px 1px rgb(255, 255, 255)",
    "border": "1px solid rgb(255, 119, 119)"
  };
  corLibera: Object = {
    "background": "rgb(200, 200, 200)",
    "texto": "black",
    "shadowColor": "inset 0px 0px 0px 1px rgb(255, 255, 255)", 
    "border": "1px solid rgb(119, 173, 255)"
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
