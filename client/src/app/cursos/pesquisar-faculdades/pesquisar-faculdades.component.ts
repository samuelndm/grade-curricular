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
  faculdades: any;
  filteredFaculdades: any[];
  private _searchTerm: string;

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredFaculdades = this.filterFaculdades(value);
  }

  filterFaculdades(value: string) {
    return this.faculdades.filter(faculdade => {
      let new_value = value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Removendo letras acentuadas
      let new_faculdade = faculdade.nome.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Removendo letras acentuadas
      let new_campus = faculdade.campus.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Removendo letras acentuadas
      return ((new_faculdade.toLowerCase().indexOf(new_value .toLowerCase()) !== -1) 
      || new_campus.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    })
  }

  sortFaculdades() {
    this.faculdades.sort((faculdade1, faculdade2) => {
      if (faculdade1.nome > faculdade2.nome) {
        return 1;
      }
      if (faculdade1.nome < faculdade2.nome) {
        return -1;
      }
    })
  }

  onSelect(id) {
    this._router.navigate(['/cursos/faculdade', id]);
  }

  ngOnInit() {
    this._dataService.getInstituicoes().subscribe(data => {
      this.faculdades = data;
      this.sortFaculdades();
      this.filteredFaculdades = this.faculdades;
  
    })
  }

}
