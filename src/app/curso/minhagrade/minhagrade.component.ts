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
  widthMinhaGrade: number;

  corLiberado: Object = {
    "background": "white",
    "texto": "black",
    "shadowColor": "none",
  };
  corSelecionado: Object = {
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

            else if (wordLowerCase[0] == "i" || wordLowerCase[0] == "v")
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
      periodo.isSelecionado = false;
      periodo.materias.forEach(materia => {
        materia.isSelecionado = false;
        if (materia.preRequisito.length == 0) {
          materia.cor = this.corLiberado;

        } else {
          materia.cor = this.corBloqueado;

        }
      })
    })
  }


  updatePeriodoColor(periodoSelecionado) {
    this.gradeCurso.forEach(periodo => {
      if (periodo.periodo == periodoSelecionado) {
        let isAllSelecionado = true;
        periodo.materias.forEach(materia => {
          if (!(materia.isSelecionado)) {
            isAllSelecionado = false;
          }
          
          
        })
        periodo.materias.forEach(materia => {
          if (!(isAllSelecionado)) {
            this.updateMateriaNaoSelecionada(materia.codigo);
            this.updateAptosParaCursar();
            
          } else {
            this.updateMateriaSelecionada(materia.codigo);
            this.updateNaoAptosParaCursar();
          }
        })
      }
    })
   
  }
  

  updateGradeColor(materia: any) {
    if (materia.isSelecionado) {
      this.updateMateriaSelecionada(materia.codigo);
      this.updateNaoAptosParaCursar();
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

  updateMateriaSelecionada(codigoMateria) {
    var materia: any = this.getMateriaById(codigoMateria);
    materia.isSelecionado = false;
    materia.cor = this.corLiberado;
  }


  private updateAptosParaCursar() {
    this.gradeCurso.forEach(periodo => {
      periodo.materias.forEach(materiaAlvo => {
        if (!(materiaAlvo.isSelecionado)) {
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

  private updateNaoAptosParaCursar() {
    this.gradeCurso.forEach(periodo => {
      periodo.materias.forEach(materiaAlvo => {
        let isApto = true;
        materiaAlvo.preRequisito.forEach(codigoPreRequisito => {
          
          let materiaPreRequisito: any = this.getMateriaById(codigoPreRequisito);

          if (!(materiaPreRequisito.isSelecionado))
            isApto = false;
        })

        if (!isApto) {
          materiaAlvo.cor = this.corBloqueado;
          materiaAlvo.isSelecionado = false;
        }
      })
    })
  }

  private getMateriaById(id) {
    let materiaAlvo: any;

    this.gradeCurso.forEach(periodo => {
      periodo.materias.forEach(materia => {
        if (materia.codigo == id)
          materiaAlvo = materia;
      })
    })
    return materiaAlvo;
  }

  constructor(private dataService: DataService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.idCurso = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this.dataService.getFaculdadesJson().subscribe(data => {
      this.data = data;
      this.faculdades = this.data.faculdades;
      this.setCursoById(this.idCurso);
      this.gradeCurso = this.curso.grade;
      this.widthMinhaGrade = this.curso.grade.length * this.widthMateria;
      this.addGradeColor();
      this.capitalizeCursosName();
    })
  }

}
