import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { DatosService, Pasajero } from '../../service/datos.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro-pasajero',
  templateUrl: './registro-pasajero.page.html',
  styleUrls: ['./registro-pasajero.page.scss'],
})
export class RegistroPasajeroPage implements OnInit {

  formularioR : FormGroup;
  newRegistre: Pasajero = <Pasajero>{};
  pasajeros:Pasajero[]=[]

  constructor(private alertController: AlertController, 
              private registroService: DatosService, 
              private toastController: ToastController, 
              private fb: FormBuilder,
              private navController: NavController,
              private menuController: MenuController) { 
                  this.formularioR = fb.group({ 
                    'usuario' : new FormControl("", [Validators.required]),
                    'nombre' : new FormControl("", [Validators.required]),
                    'correo' : new FormControl("", [Validators.required, Validators.email]),
                    'password': new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(18)]),
                    'confirmaPass': new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(18)])
                  }, {validator: this.checkIfMatchingPasswords('password', 'confirmaPass')});
               }
    passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
    mailv=(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    nm= (/[A-Za-z]\w/);
  

  ngOnInit() {
  }

  private checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
          passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
          return passwordConfirmationInput.setErrors(null);
      }
    }
  }




  async CrearUsuario(){
    var form = this.formularioR.value;
    var existe = 0;
    
    if (this.formularioR.invalid){
      this.alertError();
    }
    else{
      this.newRegistre.nomPasajero = form.nombre
      this.newRegistre.userPasajero = form.usuario
      this.newRegistre.correoPasajero = form.correo;
      this.newRegistre.passPasajero = form.password; 
      this.newRegistre.repassPasajero = form.confirmaPass;
      this.registroService.getPasajeros().then(datos =>{
        this.pasajeros = datos;
        if (!datos || datos.length==0){
          this.registroService.addUsuario(this.newRegistre).then(dato=>{ 
            this.newRegistre=<Pasajero>{};
            this.showToast('Usuario Creado satisfactoriamente');
          });
          this.formularioR.reset();
          this.navController.navigateRoot('login-pasajero');
        }else{

          for (let obj of this.pasajeros){
            if (this.newRegistre.correoPasajero == obj.correoPasajero){
              existe = 1;
            }
          }//fin del for

          if (existe == 1){
            this.alertCorreoDuplicado();
            this.formularioR.reset();
          }

          else{
            this.registroService.addUsuario(this.newRegistre).then(dato=>{ 
              this.newRegistre=<Pasajero>{};
              this.showToast('Usuario Creado satisfactoriamente');
            });
            this.formularioR.reset();
            this.navController.navigateRoot('login-pasajero');
          }
        }
        })  

        





        
  
    
    }//finelse

  }//findelmetodo

   

  async alertError(){
    const alert = await this.alertController.create({ 
      header: '¡Error!',
      message: 'Debe completar todos los datos',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

  async alertCorreoDuplicado(){
    const alert = await this.alertController.create({ 
      header: '¡Error!',
      message: 'El correo ingresado ya existe',
      buttons: ['Aceptar']
      
    })
    
    await alert.present();
  }




 async showToast(msg){
  const toast = await this.toastController.create({
    message: msg, 
    duration: 3000
  });
  toast.present();
}

}
