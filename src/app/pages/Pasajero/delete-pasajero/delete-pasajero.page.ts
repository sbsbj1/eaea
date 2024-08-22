import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerPasajeroService } from '../../../services/ser-pasajero.service';


@Component({
  selector: 'app-delete-pasajero',
  templateUrl: './delete-pasajero.page.html',
  styleUrls: ['./delete-pasajero.page.scss'],
})
export class DeletePasajeroPage  {


  Pasajero ={
    id:0,
    nombre:"",
    lat:0,
    lng:0
  }

  constructor(private router:Router,private servcPas:SerPasajeroService) { }


  ionViewWillEnter(){
    this.getPasajeroByID(this.getIdFromUrl())


  }
  





  getIdFromUrl(){
    let url = this.router.url
    let arr = url.split("/",3)
    let id = parseInt(arr[2])
    return id
  }



  getPasajeroByID(PasajeroId:Number){
    this.servcPas.getPasajeroById(PasajeroId).subscribe(
      (resp:any)=>{
        this.Pasajero = {
          id:resp[0].id,
          nombre:resp[0].nombre,
          lat:resp[0].lat,
          lng:resp[0].lng


        }
      }
    )
  }

  EliminarPasajero(){
    this.servcPas.eliminarPasajeroById(this.Pasajero).subscribe()
    this.router.navigateByUrl ("/list-p")
  }


}
