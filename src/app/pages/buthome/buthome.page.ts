import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-buthome',
  templateUrl: './buthome.page.html',
  styleUrls: ['./buthome.page.scss'],
})
export class ButhomePage implements OnInit {

  constructor(private navController:NavController) { }

  ngOnInit() { localStorage.removeItem('Ingresado');
  localStorage.removeItem('Conductor');
  }

goLogUs(){
  this.navController.navigateRoot('login-pasajero')
}

goLogCon(){
  this.navController.navigateRoot('login')
}

goRegPas(){
  this.navController.navigateRoot('registro-pasajero')
}

goRegCon(){
  this.navController.navigateRoot('register')
}




}
