import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasajeroaDD } from '../../../interfaz/pasajeroa-dd';

import { SerPasajeroService } from '../../../services/ser-pasajero.service';


@Component({
  selector: 'app-add-pasajero',
  templateUrl: './add-pasajero.page.html',
  styleUrls: ['./add-pasajero.page.scss'],
})
export class AddPasajeroPage implements OnInit {

  newPasajero:PasajeroaDD = {
    nombre:"pasajero nuevo",
    lat:123,
    lng:321

  }

  constructor(
    private pasajeroServ:SerPasajeroService,
    private router:Router
  ) { }

  ngOnInit() {
  }




  crearPasajero(){
    this.pasajeroServ.crearPasajero(this.newPasajero).subscribe()
    this.router.navigateByUrl("/list-p")

  }
}
