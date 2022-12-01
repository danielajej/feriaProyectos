import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { AgregarComponent } from './agregar/agregar.component';
import { UpdateComponent } from './update/update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactivesRoutingModule } from './reactives-routing.module';
import { LogeadoComponent } from './logeado/logeado.component';
import { EliminadoComponent } from './eliminado/eliminado.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  declarations: [
    ListaComponent,
    AgregarComponent,
    UpdateComponent,
    LogeadoComponent,
    EliminadoComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactivesRoutingModule
  ]
})
export class ReactivesModule { }
