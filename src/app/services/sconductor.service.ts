import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IConductor } from '../interfaz/iconductor';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import { IConductors } from '../interfaz/iconductors';



@Injectable({
  providedIn: 'root'
})
export class SConductorService {

  constructor(private http:HttpClient) { }

  listarConductor():Observable<IConductor>{
    return this.http.get<IConductor>(`${environment.apiUrl}/conductor`)
  }


  crearConductor(newConductor:IConductors):Observable<IConductors>{
    return this.http.post<IConductors>(`${environment.apiUrl}/conductor`,newConductor)

  }


  getConductorById(id:Number):Observable<IConductor>{
    return this.http.get<IConductor>(`${environment.apiUrl}/conductor/?id=${id}`)
  }

  ActualizaConductor(conductor:any):Observable<IConductor>{
    return this.http.put<IConductor>(`${environment.apiUrl}/conductor/${conductor.id}`,conductor)
  }

  eliminarConductorById(conductor:any):Observable<IConductor>{
    return this.http.delete<IConductor>(`${environment.apiUrl}/conductor/${conductor.id}`)
  }
}
