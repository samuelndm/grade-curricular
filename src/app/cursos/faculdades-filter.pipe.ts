import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'faculdadesFilter'
})
export class FaculdadesFilterPipe implements PipeTransform {

  transform(faculdades: any, searchTerm: any): any {
    if (!faculdades || !searchTerm) {
      return faculdades;
    }

    return faculdades.filter(faculdade => {
      faculdade.faculdade.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    })
  }

}
