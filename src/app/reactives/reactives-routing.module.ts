import { NgModule } from '@angular/core';
import { ListaComponent } from './lista/lista.component';
import { UpdateComponent } from './update/update.component';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { LogeadoComponent } from './logeado/logeado.component';
import { EliminadoComponent } from './eliminado/eliminado.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'logeado', component: LogeadoComponent, canActivate: [AuthGuard] },
      { path: 'lista', component: ListaComponent },
      { path: 'agregar', component: AgregarComponent,canActivate: [AuthGuard] },
      { path: 'update/:id', component: UpdateComponent,canActivate: [AuthGuard] },
      { path: 'eliminado', component: EliminadoComponent,  canActivate: [AuthGuard]  },
      { path: 'usuarios', component: UsuariosComponent,  canActivate: [AuthGuard]  },
      { path: '**', redirectTo: 'lista' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactivesRoutingModule { }
