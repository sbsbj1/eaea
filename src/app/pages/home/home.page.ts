import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private menuController: MenuController,
    private Storage:Storage ,private navController: NavController, private alertController) { }

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


}
