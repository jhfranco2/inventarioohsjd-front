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
  archivos: FormData = new FormData();
  constructor(
    private usuarioService: UsuarioService) {
  }
  crearUsuario() {
    this.usuarioService.crearUsuario(this.usuario, this.archivos)
      .subscribe(
        response => {
          console.log('Usuario creado exitosamente');
          // Realizar acciones adicionales después de crear el usuario
        },
        error => {
          console.error('Error al crear el usuario', error);
          // Manejar el error adecuadamente
        }
      );
  }

  onFileChange(event: any, tipoArchivo: string) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.archivos.append(tipoArchivo, file);
    }
  }
}
