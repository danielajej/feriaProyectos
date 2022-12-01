import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConexionService } from 'src/app/services/conexion.service';
import { RegistrosUsuarios } from '../interfaces/heroes';

// Importacion de Swal para las alertas
import Swal from 'sweetalert2';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  nuevo: RegistrosUsuarios = {
    nombre: '',
    descripcion: '',
    precio: ''
  };

  Formulario: FormGroup = this.fb.group({
    id: [],
    nombre: [, [Validators.required, Validators.minLength(3)]],
    descripcion: [, [Validators.required, Validators.minLength(1)]],
    precio: [, [Validators.required, Validators.minLength(0)]]
  });
  constructor(
    private fb: FormBuilder,
    private conexion: ConexionService,
    private router: Router,
    private activedRouter: ActivatedRoute) {
    const id = this.activedRouter.snapshot.params['id'];
    this.ObtenerRegistro(id);
   
  };


  ObtenerRegistro(id: any) {
      this.conexion.Post('menu', 'GetId', { 'id': id }).subscribe((dato: any) => {
        this.Formulario.patchValue({
          id: dato.id,
          nombre: dato.nombre,
          descripcion: dato.descripcion,
          precio: dato.precio
        });
      });
    }
  ngOnInit(): void {
  }

  campoEsValido(campo: string) {
    return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
  }

  guardar() {
    this.conexion.Post('menu', 'Update', this.Formulario.value).subscribe((dato: any) => {
      console.log(dato);
      if (dato['estatus']) {
        this.router.navigate(['reactive/logeado']);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Se acualizo el platillo correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      }
    });
  };

  eliminar(id:any) {  
    Swal.fire({
      title: '¿Quieres eliminar este platillo?',
      text: "Una vez eliminado no hay vuelta atras",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {this.conexion.Post('menu', 'Delete', { id: id }).subscribe((dato: any) => {
        console.log(dato);
        if (dato['estatus']) {
          this.router.navigate(['reactive/lista']);
        Swal.fire(
          '!Eliminado¡',
          'El platillo ha sido Eliminado',
          'success'
        )
        };
        });
      };
    });
  }
  
  logout(){
    localStorage.clear();
  }
}
