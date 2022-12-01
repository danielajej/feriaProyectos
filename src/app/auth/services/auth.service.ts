import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  verificacion(): Observable<boolean>{
    console.log(localStorage.getItem('Tokensillo'));
    if(localStorage.getItem('Tokensillo')){
      return of(true);
    }
    else{
      return of(false);
    }
    
  }

  login(){
    localStorage.setItem('Tokensillo', '21');
  }

  logout(){
    localStorage.clear();
  }
}
