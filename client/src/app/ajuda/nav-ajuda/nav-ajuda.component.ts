import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-ajuda',
  templateUrl: './nav-ajuda.component.html',
  styleUrls: ['./nav-ajuda.component.css']
})
export class NavAjudaComponent implements OnInit {

  constructor(private _location: Location) { }

  onSelectVoltar() {
    this._location.back();
  }

  ngOnInit() {
  }

}
