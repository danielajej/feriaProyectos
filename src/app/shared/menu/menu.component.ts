import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
interface MenuItem {
  texto: string;
  ruta: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  options: any = [];
  reactiveMenu: MenuItem[] = [
    //{ texto: 'Agregar', ruta: './reactives/agregar' },
    { texto: 'Lista', ruta: './reactives/lista' },
    { texto: 'Iniciar Sesión', ruta: './reactives/login'}
  ];
  constructor(private conexion: ConexionService) { 
    this.ObtenerLista();
  }

  ngOnInit(): void {
  }
  ObtenerLista() {
    this.conexion.Get('menu', 'GetAll').subscribe((dato: any) => {
      console.log(dato);
      this.options = dato;
    });
  }

  public _filter(value: any): any[] {
    const filterValue = value?.toLowerCase()?.toString();

    return this.options.filter((option: { nombre_dependencia: any }) =>
        option.nombre_dependencia?.toLowerCase().includes(filterValue)
    )  }

}
