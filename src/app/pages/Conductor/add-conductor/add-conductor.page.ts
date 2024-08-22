import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IConductors } from '../../../interfaz/iconductors';
import { SConductorService } from '../../../services/sconductor.service';

@Component({
  selector: 'app-add-conductor',
  templateUrl: './add-conductor.page.html',
  styleUrls: ['./add-conductor.page.scss'],
})
export class AddConductorPage implements OnInit {

  newConductor:IConductors = {
    nombre:"Conductor Nuevo",
    marca:"Kia",
    patente:"OLE32"
  }

  constructor(
    private conductorServ:SConductorService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  crearConductor(){
    this.conductorServ.crearConductor(this.newConductor).subscribe()
    this.router.navigateByUrl("/list-conductor")

  }

}
