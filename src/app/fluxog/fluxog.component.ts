import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { cursorTo } from 'readline';

@Component({
  selector: 'app-fluxog',
  templateUrl: './fluxog.component.html',
  styleUrls: ['./fluxog.component.css']
})
export class FluxogComponent implements OnInit {

  curso: Object;
  nomeCurso: string;
  gradeCurso: Object[];
  widthMateria: number = 147;
  widthFluxograma: number;
  


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCurso().subscribe(data => {
      this.curso = data
      this.nomeCurso = data.curso
      this.gradeCurso = data.grade
      this.widthFluxograma = data.grade.length * this.widthMateria
    })
  }



}
