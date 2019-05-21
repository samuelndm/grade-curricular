import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  curso: any;
  nomeCurso: string;
  isCollapsed = false;

constructor(private dataService: DataService) { }

ngOnInit() {
  this.dataService.getCurso().subscribe(data => {
    this.curso = data;
    this.nomeCurso = this.curso.curso;
  })

}

}

