import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  Lista: any = [] ;
  ListaPollo: any = [] ;
  Lista50: any = [] ;
  ListaSinCarne: any = [] ;
  buscador: any =[];
  constructor(private conexion: ConexionService) {
    this.ObtenerLista();
    this.ObtenerListaPollo();
    this.ObtenerLista50();
    this.ObtenerListaSinCarne();
  }

  ObtenerLista() {
    this.conexion.Get('menu', 'GetAll').subscribe((dato: any) => {
      console.log(dato);
      this.Lista = dato;
    });
  }

  ObtenerListaPollo() {
    this.conexion.Get('menu', 'GetPollo').subscribe((dato: any) => {
      console.log(dato);
      this.ListaPollo = dato;
    });
  }
  ObtenerLista50() {
    this.conexion.Get('menu', 'Get50').subscribe((dato: any) => {
      console.log(dato);
      this.Lista50 = dato;
    });
  }
  ObtenerListaSinCarne() {
    this.conexion.Get('menu', 'GetSinCarne').subscribe((dato: any) => {
      console.log(dato);
      this.ListaSinCarne = dato;
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

  buscar(data: any){
    console.log(data);
    const filterValue= (data.target as HTMLInputElement).value.trim()?.toLocaleLowerCase();
    console.log(filterValue);
  
    let a : any = this.Lista?.filter((option: {nombre: any}) =>
    option.nombre?.toString()?.toLocaleLowerCase()?.includes(filterValue)
    );
    let b : any = this.Lista?.filter((option: {descripcion: any}) =>
    option.descripcion?.toString()?.toLocaleLowerCase()?.includes(filterValue)
    );
    let c : any = this.Lista?.filter((option: {precio: any}) =>
    option.precio?.toString()?.toLocaleLowerCase()?.includes(filterValue)
    );
    this.buscador = this.buscador.concat(a,b,c);
    console.log(a,b,c);
    return(this.buscador);
  }

  ngOnInit(): void {
  }

}
