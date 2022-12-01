import { Injectable } from '@angular/core';
import { RegistrosUsuarios } from '../reactives/interfaces/heroes';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private _personajes: RegistrosUsuarios[] = [
    
  ];
  public get personajes() : RegistrosUsuarios[]{
    return[...this._personajes];
  }
  
  agregarHeroe(personaje: RegistrosUsuarios){
  this._personajes.push(personaje);
  }
  
    constructor() { }
  }
