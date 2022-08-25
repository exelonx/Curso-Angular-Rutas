import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['EU', 'SAARC', 'ASEAN', 'CAIS', 'NAFTA'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  getClaseCSS( region: string ): string {
    return (region === this.regionActiva ? 'btn btn-primary' : 'btn btn-outline-primary')
  }

  activarRegion(region: string) {
    if(region === this.regionActiva) {return;}
    this.regionActiva = region;
    this.paisService.buscarRegion(region)
      .subscribe(paises => {
        this.paises = paises;
      })

  }

  ngOnInit(): void {
  }

}
