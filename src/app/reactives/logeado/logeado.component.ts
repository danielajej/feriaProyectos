import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-logeado',
  templateUrl: './logeado.component.html',
  styleUrls: ['./logeado.component.css']
})
export class LogeadoComponent implements OnInit {

  Lista: any = [];
  constructor( private conexion: ConexionService) { 
    this.ObtenerLista();
  }

  ngOnInit(): void {
  }

  ObtenerLista() {
    this.conexion.Get('menu', 'GetAll').subscribe((dato: any) => {
      console.log(dato);
      this.Lista = dato;
    });
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

  logout(){
    localStorage.clear();
  }
}
