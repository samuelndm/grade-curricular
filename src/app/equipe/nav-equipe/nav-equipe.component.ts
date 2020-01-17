import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-equipe',
  templateUrl: './nav-equipe.component.html',
  styleUrls: ['./nav-equipe.component.css']
})
export class NavEquipeComponent implements OnInit {

  constructor(private _location: Location) { }

  onSelectVoltar() {
    this._location.back();
  }

  ngOnInit() {
  }

}
