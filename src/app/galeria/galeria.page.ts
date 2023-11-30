// galeria.page.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: 'galeria.page.html',
  styleUrls: ['galeria.page.scss'],
})
export class GaleriaPage {
  imagenes = [
    { url: 'https://via.placeholder.com/150', descripcion: 'Descripción 1' },
    { url: 'https://via.placeholder.com/150', descripcion: 'Descripción 2' },
  ];
}
