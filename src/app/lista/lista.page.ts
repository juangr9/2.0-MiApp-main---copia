// lista.page.ts
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lista',
  templateUrl: 'lista.page.html',
  styleUrls: ['lista.page.scss'],
})
export class ListaPage {
  elementos: { nombre: string }[] = [];

  constructor(private dataService: DataService) {}

  ionViewWillEnter() {
    this.elementos = this.dataService.obtenerElementos();
  }
}
