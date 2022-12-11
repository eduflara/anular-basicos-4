import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

personajes: Personaje[] = [
]

nuevo:Personaje = {
  nombre:'',
  poder:0
}

}
