import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  i = 0;
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string='';
  

  borrarHeroe() {
  this.heroeBorrado = this.heroes.shift() || '';
 
}
  agregarHeroe(){
  
    // recupera al Array borrada con el boton de borrar y recuperarla con el boton de recuperar
    this.heroes.unshift(this.heroeBorrado);
    this.heroeBorrado = '';

  }
}
