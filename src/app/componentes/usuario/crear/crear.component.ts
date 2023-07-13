import { Component } from '@angular/core';
import { Content, UsuarioCrear } from 'src/app/interfaces/usuario.interface';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {

  usuario: UsuarioCrear = new UsuarioCrear();
  imagenSeleccionada: File = new File([], 'sin_imagen.png');

  constructor(private usuarioService: UsuarioService) {}

  crearUsuario() {
    this.usuarioService.crearUsuario(this.usuario)
      .subscribe(
        response => {
          console.log(this.usuario);
          // Realizar acciones adicionales después de crear el usuario
        },
        error => {
          console.error('Error al crear el usuario', error);
          // Manejar el error adecuadamente
        }
      );
  }

  onFileSelected(event: any) {
    this.imagenSeleccionada = event.target.files[0];
    this.usuario.archivoActaEntrega = this.imagenSeleccionada;

  }
}
