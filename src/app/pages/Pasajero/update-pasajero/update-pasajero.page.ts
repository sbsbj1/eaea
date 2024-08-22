import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerPasajeroService } from '../../../services/ser-pasajero.service';


@Component({
  selector: 'app-update-pasajero',
  templateUrl: './update-pasajero.page.html',
  styleUrls: ['./update-pasajero.page.scss'],
})
export class UpdatePasajeroPage  {


  pasajero = {
    id:0,
    nombre:"",
    lat:0,
    lng:0
  }


  constructor( private servPa:SerPasajeroService,private router:Router ) { }

  
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
    this.servPa.getPasajeroById(PasajeroId).subscribe(
      (resp:any)=>{
        this.pasajero = {
          id:resp[0].id,
          nombre:resp[0].nombre,
          lat:resp[0].lat,
          lng:resp[0].lng


        }
      }
    )
  }




  updatePasajero(){
    this.servPa.ActualizaPasajero(this.pasajero).subscribe()
    this.router.navigateByUrl("/list-p")
  }


}
