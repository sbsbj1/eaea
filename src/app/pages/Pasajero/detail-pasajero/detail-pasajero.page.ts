import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { SerPasajeroService } from '../../../services/ser-pasajero.service';


@Component({
  selector: 'app-detail-pasajero',
  templateUrl: './detail-pasajero.page.html',
  styleUrls: ['./detail-pasajero.page.scss'],
})
export class DetailPasajeroPage  {

  Pasajero ={
    id:0,
    nombre:"nom",
    lat:-33.51130400804633,
    lng:-70.75239027837628
     
  }


  constructor(private pasajeroServ:SerPasajeroService,
    private router:Router, private navController: NavController,public alertController : AlertController) { }




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
    this.pasajeroServ.getPasajeroById(PasajeroId).subscribe(
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

    async exit(){
    const alerta= await this.alertController.create({
      header: 'Gracias por visitarnos!',
      buttons:['ok'],
      mode:'ios'
    })
    await alerta.present();
    localStorage.removeItem('Ingresado');
    this.navController.navigateRoot('/buthome');

  
  }

}
