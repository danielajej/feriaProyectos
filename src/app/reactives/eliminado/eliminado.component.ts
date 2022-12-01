import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminado',
  templateUrl: './eliminado.component.html',
  styleUrls: ['./eliminado.component.css']
})
export class EliminadoComponent implements OnInit {

  Lista: any = [];
  constructor( private conexion: ConexionService) { 
    this.ObtenerLista();
  }

  ngOnInit(): void {
  }
  
  ObtenerLista() {
    this.conexion.Get('menu', 'GetAllEliminado').subscribe((dato: any) => {
      console.log(dato);
      this.Lista = dato;
    });
  }

  Update(id : any) {
    this.conexion.Post('menu', 'UpdateEliminado', { id: id }).subscribe((dato: any) => {
      console.log(dato);
      if (dato['estatus']) {
        this.ObtenerLista();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Se añadio de nuevo el registro al menú',
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

