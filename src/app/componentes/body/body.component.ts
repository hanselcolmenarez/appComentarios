import { Component, OnInit } from '@angular/core';
import { ComentarioService } from 'src/app/servicios/comentario.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
/*
  comentarios: any [] = [{
    nombre: "Hansel Colmenarez",
    alias: "@hcolmen",
    comentario: "Framework Angular sigue evolucionando"
  },
  {
    nombre: "John Papa",
    alias: "@jpapa",
    comentario: "Thank you for watching this tutorial"
  }];
*/

  comentarios: any;

  nombre: any;
  comentario: any;

  constructor(private _comentarios: ComentarioService) { }

  ngOnInit(): void {
    this.obtenerComentarios();
  }

  agregarComentario(){
    console.log(this.nombre);
    console.log(this.comentario);

    let comentarioAux = {
      nombre: this.nombre,
      //alias: `@ ${ this.nombre }`,
      comentario: this.comentario
    }

    //this.comentarios.push(comentarioAux);
    this._comentarios.guardar(comentarioAux)
    .subscribe( data => {
      console.log("Comentario Guardado");
      this.obtenerComentarios();
    })

  }

  eliminar(indice: any){
    //this.comentarios.splice(indice, 1);
    this._comentarios.eliminar(indice)
    .subscribe( data => {
      console.log("Comentario Eliminado Correctamente");
      this.obtenerComentarios();
    })
  }

  obtenerComentarios() {
    this._comentarios.obtener() 
    .subscribe( data => {
      this.comentarios = data;
      console.log(this.comentarios);
    })
  }

}
