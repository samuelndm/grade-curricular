import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  nomeCurso: string;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCurso().subscribe(data => {
      this.nomeCurso = data.curso
    })
    
  }

}
