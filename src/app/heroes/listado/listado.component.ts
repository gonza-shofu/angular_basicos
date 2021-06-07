import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
export class ListadoComponent {

  heroes: string[] = ['spiderman', 'hulk', 'thor','capitan america'];
  heroeBorrado: string = '';

  borrarHeroe():void{  
      this.heroeBorrado =  this.heroes.shift() || ''; 
  }

  contadorHeroes():boolean{
      let heroes: number = this.heroeBorrado.length;
      if(heroes > 0){
        return true;
      }
      return false; 
  }

  

}
