import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-pesquisar-faculdades',
  templateUrl: './pesquisar-faculdades.component.html',
  styleUrls: ['./pesquisar-faculdades.component.css']
})
export class PesquisarFaculdadesComponent implements OnInit {

  constructor(private _dataService: DataService, private _router: Router) { }

  data: any;
  faculdades: any[];

  sortFaculdades() {
    this.faculdades.sort((faculdade1, faculdade2) => {
      if (faculdade1.faculdade > faculdade2.faculdade) {
        return 1;
      }
      if (faculdade1.faculdade < faculdade2.faculdade) {
        return -1;
      }
    })
  }

  onSelect(id) {
    this._router.navigate(['/faculdade', id]);
  }

  ngOnInit() {
    this._dataService.getFaculdadesJson().subscribe(data => {
      this.data = data;
      this.faculdades = this.data.faculdades;
      this.sortFaculdades();
    })
  }

}
