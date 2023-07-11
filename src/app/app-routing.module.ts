import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { CrearComponent } from './componentes/usuario/crear/crear.component';

const routes: Routes = [
  {path:'usuarios',component:UsuarioComponent},
  {path:'inicio',redirectTo:'/usuarios'},
  {path:'crear-usuario',component:CrearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
