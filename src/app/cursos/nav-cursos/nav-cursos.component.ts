import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-nav-cursos',
  templateUrl: './nav-cursos.component.html',
  styleUrls: ['./nav-cursos.component.css']
})
export class NavCursosComponent implements OnInit {

  constructor(private _location: Location) { }

  onSelectVoltar() {
    this._location.back();
  }

  ngOnInit() {
  }

}
