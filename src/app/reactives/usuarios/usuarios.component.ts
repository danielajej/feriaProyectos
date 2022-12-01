import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  Lista: any = [];

  constructor(private conexion: ConexionService) {
    this.ObtenerLista();

   }

  ngOnInit(): void {
  }

  ObtenerLista() {
    this.conexion.Get('menu', 'GetClientes').subscribe((dato: any) => {
      console.log(dato);
      this.Lista = dato;
    });
  }

  logout(){
    localStorage.clear();
  }
  Eliminar(id : any) {
    this.conexion.Post('menu', 'Delete', { id: id }).subscribe((dato: any) => {
      console.log(dato);
      if (dato['estatus']) {
        this.ObtenerLista();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Se elimino el registro correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      }
    });
  }
}
