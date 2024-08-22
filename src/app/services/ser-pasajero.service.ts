import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PasajeroJson } from '../interfaz/pasajero-json';
import { PasajeroaDD } from '../interfaz/pasajeroa-dd';
@Injectable({
  providedIn: 'root'
})
export class SerPasajeroService {

  constructor(private http:HttpClient) { }


  ListaPas():Observable<PasajeroJson>{
    return this.http.get<PasajeroJson>(`${environment.apiUrl}/pasajeros`)
  }





  crearPasajero(newPasajero:PasajeroaDD):Observable<PasajeroaDD>{
    return this.http.post<PasajeroaDD>(`${environment.apiUrl}/pasajeros`,newPasajero)

  }


  getPasajeroById(id:Number):Observable<PasajeroJson>{
    return this.http.get<PasajeroJson>(`${environment.apiUrl}/pasajeros/?id=${id}`)
  }

  ActualizaPasajero(pasajero:any):Observable<PasajeroJson>{
    return this.http.put<PasajeroJson>(`${environment.apiUrl}/pasajeros/${pasajero.id}`,pasajero)
  }

  eliminarPasajeroById(pasajero:any):Observable<PasajeroJson>{
    return this.http.delete<PasajeroJson>(`${environment.apiUrl}/pasajeros/${pasajero.id}`)
  }


}
