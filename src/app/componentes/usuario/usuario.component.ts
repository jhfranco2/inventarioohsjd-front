import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Content, UsuarioResponse } from 'src/app/interfaces/usuario.interface';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'] 
}) 
export class UsuarioComponent implements OnInit {

  usuarios: Content[] = [];
  displayedColumns: string[] = [
    'id',
    'nombreEquipo',
    'cenCos', 
    'grupoAreaPertenece', 
    'usuarioResp', 
    'documento', 
    'cargo', 
    'fechaAsignacion', 
    'fechaCompra', 
    'activo', 
    'marca', 
    'modelo', 
    'tipo', 
    'sisOper', 
    'licencia', 
    'procesador', 
    'frecuencia', 
    'memRar', 
    'capacidad', 
    'discDur', 
    'tipo2', 
    'monMar', 
    'tamanio',
    'modelo3',
    'serial4',
    'activo5',
    'tecMarca',
    'serial6',
    'mousMarc',
    'serial7',
    'cargMarc',
    'serial8',
    'macAdpInal',
    'macAdEth',
    'dominioGrupo',
    'observaciones',
    'estado'

  ];
  totalElements = 0;
  pageSize = 10;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    const pageIndex = this.paginator?.pageIndex;
    this.usuarioService.getUsuarios(pageIndex, this.pageSize, 'id', false)
      .subscribe((data: UsuarioResponse) => {
        this.usuarios = data.usuarios.content;
        this.totalElements = data.usuarios.totalElements;
      });
  }

  onPageChange(event: any): void {
    this.paginator.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getUsuarios();
  }

}