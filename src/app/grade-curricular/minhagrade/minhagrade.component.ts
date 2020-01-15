import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-minhagrade',
  templateUrl: './minhagrade.component.html',
  styleUrls: ['./minhagrade.component.css']
})
export class MinhagradeComponent implements OnInit {
  data: any;
  faculdades: any;
  cursos: any;
  curso: any;
  idCurso: any;
  gradeCurso: any[];
  gradeCursoCapitalized: any[];
  widthMateria: number = 152;
  widthFluxograma: number;

  corLiberado: Object = {
    "background": "white",
    "texto": "black",
    "shadowColor": "none",
  };
  corSelecionado: Object = {
    // "background": "rgb(14, 170, 0)",
    "background": "rgb(101, 110, 238)",
    "texto": "white",
    "shadowColor": "0.5px 0.2px black",
  };
  corBloqueado: Object = {
    "background": "rgb(200, 200, 200)",
    "texto": "black",
    "shadowColor": "none",
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
        materia.isSelecionado = false;
        if (materia.preRequisito.length == 0) {
          materia.cor = this.corLiberado;
          materia.isLiberado = true;

        } else {
          materia.cor = this.corBloqueado;
          materia.isBloqueado = true;
        }
      })
    })
  }

  public updateGradeColor(materia: any) {
    if (materia.isSelecionado) {
      this.updateMateriaSelecionada(materia.codigo);
      this.updateAptosParaCursar();
    }
    else {
      this.updateMateriaNaoSelecionada(materia.codigo);
      this.updateAptosParaCursar();
    }

  }


  updateMateriaNaoSelecionada(codigoMateria: any) {
    this.updatePreRequisitosRecursive(codigoMateria);
  }

  private updatePreRequisitosRecursive(codigoMateria: any) {
    this.gradeCurso.forEach(periodo => {
      periodo.materias.forEach(materia => {

        if (materia.codigo == codigoMateria) {
          materia.cor = this.corSelecionado;
          materia.isSelecionado = true;


          materia.preRequisito.forEach(codigoPreRequisito => {
            return this.updatePreRequisitosRecursive(codigoPreRequisito);
          })
        }
      })
    })

  }


  private updateAptosParaCursar() {
    this.gradeCurso.forEach(periodo => {
      periodo.materias.forEach(materiaAlvo => {
        if (!materiaAlvo.isSelecionado) {
          let isApto = true;
          materiaAlvo.preRequisito.forEach(codigoPreRequisito => {
            var materiaPreRequisito: any = this.getMateriaById(codigoPreRequisito);

            if (!(materiaPreRequisito.isSelecionado))
              isApto = false;
          })

          if (isApto)
            materiaAlvo.cor = this.corLiberado;
        }
      })
    })
  }

  getMateriaById(id) {
    let materiaAlvo: any;

    this.gradeCurso.forEach(periodo => {
      periodo.materias.forEach(materia => {
        if (materia.codigo == id)
          
          materiaAlvo = materia;
      })
    })

    return materiaAlvo;
  }

  updateMateriaSelecionada(materiaSelecionada: any) {
    this.gradeCurso.forEach(periodo => {
      periodo.materias.forEach(materia => {

        if (materia.cor == this.corBloqueado)
          return;
        if (materia.codigo == materiaSelecionada.codigo && materia.isSelecionado) {
          materia.cor = this.corLiberado;
          materia.isSelecionado = false;
        } else {
          materia.cor = this.corBloqueado;
          materia.isSelecionado = false;
        }

        materiaSelecionada.preRequisito.forEach(codigoPreRequisito => {
          this.updateMateriaSelecionada(materia);
        })
      })
    })
  }

  resetGradeColor() {
    this.gradeCurso.forEach(periodo => {
      periodo.materias.forEach(materia => {
        materia.cor = this.corLiberado;
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
