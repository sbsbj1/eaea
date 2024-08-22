import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';

import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { SerPasajeroService } from '../../../services/ser-pasajero.service';

@Component({
  selector: 'app-list-p',
  templateUrl: './list-p.page.html',
  styleUrls: ['./list-p.page.scss'],
})
export class ListPPage  {

  pasajeros = []


  constructor(private PasajerosSer:SerPasajeroService, private LoadingCtrl:LoadingController,
    private navController: NavController,public alertController : AlertController) { }

  ionViewWillEnter(){
    this.LoadPasajero()
  }



  async LoadPasajero(event?:InfiniteScrollCustomEvent){
    const loading = await this.LoadingCtrl.create({
      
      message:"cargando...",
      spinner:"bubbles"


      }
    );
    await loading.present();

    this.PasajerosSer.ListaPas().subscribe(
      (resp)=> {
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.pasajeros = JSON.parse(listString)
        event?.target.complete();

      },
      (err)=>{
        console.log(err.message)
        loading.dismiss();
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
