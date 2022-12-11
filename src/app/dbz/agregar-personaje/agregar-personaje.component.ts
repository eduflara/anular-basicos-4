import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/interface';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html'
})
export class AgregarPersonajeComponent {

  @Input() personajes:any[]=[];

  @Input() nuevo:Personaje = {
    nombre : '',
    poder:0
  };

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre : '',
      poder : 0
    }
  }

}
