import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-fluxog',
  templateUrl: './fluxog.component.html',
  styleUrls: ['./fluxog.component.css']
})
export class FluxogComponent implements OnInit {

  data: any;
  faculdades: any;
  cursos: any;
  curso: any;
  idCurso: any;
  gradeCurso: any[];
  gradeCursoCapitalized: any[];
  widthMateria: number = 152;
  widthFluxograma: number;

  corPadrao: Object = {
    "background": "white",
    "texto": "black",
    "shadowColor": "none",
    "border": "1px solid rgb(206, 206, 206)"
  };
  corSelecionado: Object = {
    // "background": "rgb(14, 170, 0)",
    "background": "rgb(101, 110, 238)",
    "texto": "white",
    "shadowColor": "0.5px 0.2px black",
    "border": "1 solid rgb(0, 0, 0, 0)"
  };
  corPreRequisito: Object = {
    "background": "rgb(200, 200, 200)",
    "texto": "black",
    "shadowColor": "none",
    "border": "1.49px solid rgb(248, 245, 38)"
  };
  corLibera: Object = {
    "background": "rgb(200, 200, 200)",
    "texto": "black",
    "shadowColor": "none",
    // "border": "1.45px solid rgb(119, 173, 255)"
    "border": "1.49px solid rgb(122, 223, 82)"

  };

  setCursoById(id) {
    this.faculdades.forEach(faculdade => {
      faculdade.cursos.forEach(cursoAtual => {
        if (cursoAtual.idCurso === id) {
          this.curso = cursoAtual;
        }
      })
    })
  }

  capitalizeCursosName() {
    this.gradeCurso.forEach(periodo => {
      periodo.materias.forEach(materia => {
        let materiaNomeSplited = materia.nome.split(/(\s+)/).filter(e => e.trim().length > 0);
        let materiaNomeCapitalized = "";
        materiaNomeSplited.forEach(word => {
          let wordLowerCase = word.toLowerCase();
          if (!(word.length == 3 && word[0] == "(" && word.slice(-1) == ")")) {
            
          if (word.length > 3) {
            
              if (wordLowerCase.indexOf("iii") != -1) 
                materiaNomeCapitalized += " " + word.toUpperCase();
              else
                materiaNomeCapitalized += " " + wordLowerCase.charAt(0).toUpperCase() + wordLowerCase.slice(1);
          }
          
          else if (wordLowerCase == materiaNomeSplited[0].toLowerCase()) 
              materiaNomeCapitalized += " " + word.toUpperCase();
            
          else if (wordLowerCase[0] == "i" || wordLowerCase[0] == "V") 
          materiaNomeCapitalized += " " + word.toUpperCase();
          else {
            materiaNomeCapitalized += " " + word.toLowerCase();
          }
            
        } 
        })


        materia.nome = materiaNomeCapitalized;

      })
    })
  }

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
          if (materia.codigo == codigoPreRequisito) {
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



  constructor(private dataService: DataService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.idCurso = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this.dataService.getFaculdadesJson().subscribe(data => {
      this.data = data;
      this.faculdades = this.data.faculdades;
      this.setCursoById(this.idCurso);
      this.gradeCurso = this.curso.grade;
      this.widthFluxograma = this.curso.grade.length * this.widthMateria;
      this.addGradeColor();
      this.capitalizeCursosName();
    })
  }



}
