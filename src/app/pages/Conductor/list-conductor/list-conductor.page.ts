import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { SConductorService } from '../../../services/sconductor.service';



@Component({
  selector: 'app-list-conductor',
  templateUrl: './list-conductor.page.html',
  styleUrls: ['./list-conductor.page.scss'],
})
export class ListConductorPage {

  conductor = []

  constructor(private conductorServ:SConductorService, 
    private LoadingCtrl:LoadingController,private navController: NavController,public alertController : AlertController) { }

    ionViewWillEnter(){
      this.loadConductor()
    }

  async loadConductor(event?: InfiniteScrollCustomEvent){
    const loading = await this.LoadingCtrl.create({
      message:"cargando...",
      spinner:"bubbles"
    });
    await loading.present();

    this.conductorServ.listarConductor().subscribe(
      (resp) => {
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.conductor = JSON.parse(listString)
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
