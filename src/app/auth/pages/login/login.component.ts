import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConexionService } from 'src/app/services/conexion.service';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  Formulario: FormGroup = this.fb.group({
    email: [, [Validators.required, Validators.minLength(3)]],
    password: [, [Validators.required, Validators.minLength(0)]]
  });
  constructor(
    private conexion: ConexionService,
    private fb: FormBuilder,
    private router: Router,
    public authService: AuthService
  ) { 
    this.authService.logout();
  }

  ngOnInit(): void {
  }
  campoEsValido(campo: string) {
    return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
  }

  login(){
    this.conexion.Post('menu','GetUsuario',this.Formulario.value).subscribe((dato:any)=>{
      console.log(dato);
      if(dato[0]['existe']=="1"){
        this.authService.login();
        setTimeout(()=>{
          this.router.navigate(['/reactive/logeado']);
        },1000);
      }else{
        Swal.fire({
          position: 'center',
          icon:'error',
          title: 'email y/o contraseña incorrecta.',
          showConfirmButton:false,
          timer: 1500
        })
        alert("Contraseña incorrecta");
      }
    })
  }

  ingresarSinLogin(){
    this.authService.logout();
    setTimeout(() => {
      this.router.navigate(['/reactive/lista']);
    }, 1000);
  }

}
