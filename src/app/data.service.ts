// data.service.ts
import { Injectable } from '@angular/core';
// alta.page.ts y lista.page.ts

3
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private elementos: { nombre: string }[] = [];

  agregarElemento(elemento: { nombre: string }) {
    this.elementos.push(elemento);
  }

  obtenerElementos(): { nombre: string }[] {
    return this.elementos;
  }
}
