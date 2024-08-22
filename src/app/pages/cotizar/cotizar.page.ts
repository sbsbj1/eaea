import { Component, OnInit } from '@angular/core';
import { MenuController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

declare var H;

@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.page.html',
  styleUrls: ['./cotizar.page.scss'],
})
export class CotizarPage implements OnInit {

  constructor(private menuController: MenuController,
    private Storage:Storage ,private navController: NavController,private alertController:AlertController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  Logout(){
    localStorage.removeItem('Ingresado');
    this.navController.navigateRoot('buthome');
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


  calDistance(){
    const firstMarker= new H.map.Marker({lat:20.68766,lng:56.67865});
    const secondMarker= new H.map.Marker({lat:46.68765,lng:37.67654});
    
    var distance = firstMarker.getGeometry().distance
    (secondMarker.getGeometry());
    alert("El viaje sale aproximadamente $5.000")
  }
}
