// alta.page.ts
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alta',
  templateUrl: 'alta.page.html',
  styleUrls: ['alta.page.scss'],
})
export class AltaPage {
  nuevoElemento: { nombre: string } = { nombre: '' };

  constructor(
    private alertController: AlertController,
    private router: Router,
    private dataService: DataService
  ) {}

  async agregarElemento() {
    if (this.nuevoElemento.nombre.trim() !== '') {
      this.dataService.agregarElemento(this.nuevoElemento);

      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Elemento agregado correctamente.',
        buttons: ['OK'],
      });

      await alert.present();

      // Limpiar el nuevo elemento después de agregarlo
      this.nuevoElemento = { nombre: '' };
    }
  }

  verLista() {
    this.router.navigate(['/lista']);
  }
}
