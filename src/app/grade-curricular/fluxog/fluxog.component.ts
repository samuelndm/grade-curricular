import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';


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
    "shadowColor": "inset 0px 0px 0px 2px rgb(255, 255, 255, 0)",
    "border": "1px solid rgb(206, 206, 206)"
  };
  corSelecionado: Object = {
    
    "background": "rgb(78, 185, 114)",
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

  public updateGradeColorOnOver(materiaSelecionada: any) {

    this.gradeCurso.forEach(periodo => {
      periodo.materias.forEach(materia => {

        if (materia.codigo == materiaSelecionada.codigo) {
          materia.cor = this.corSelecionado;
        };

        materia.preRequisito.forEach(codigoPreRequisito => {
          if (codigoPreRequisito == materiaSelecionada.codigo) {
            materia.cor = this.corLibera;
          }

        });
        
        materiaSelecionada.preRequisito.forEach(codigoPreRequisito => {
          if ( materia.codigo == codigoPreRequisito ) {
            materia.cor = this.corPreRequisito;
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
    this.dataService.getCursos().subscribe(data => {
      this.curso = data
      this.nomeCurso = this.curso.curso
      this.gradeCurso = this.curso.grade
      this.widthFluxograma = this.curso.grade.length * this.widthMateria
      this.addGradeColor();
    })
  }



}
