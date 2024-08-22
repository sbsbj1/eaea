import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { RegistroserviceService,Usuario} from '../../service/registroservice.service';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formularioRegistro : FormGroup;
  newRegistro: Usuario = <Usuario>{};
  usuarios: Usuario [] = [];

  constructor(private alertController: AlertController, 
              private registroService: RegistroserviceService, 
              private toastController: ToastController, 
              private fb: FormBuilder,
              private navcontroller:NavController,
              private menuController: MenuController) { 
                  this.formularioRegistro = fb.group({ 
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

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
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
    var form = this.formularioRegistro.value;
    var existe = 0;

    if(this.formularioRegistro.invalid){
    this.alertError();
    }

    else{
      this.newRegistro.nomUsuario = form.nombre;
      this.newRegistro.correoUsuario = form.correo;
      this.newRegistro.passUsuario = form.password; 
      this.newRegistro.repassUsuario = form.confirmaPass;

      this.registroService.getUsuarios().then(datos =>{
        this.usuarios= datos ;

        if (!datos || datos.length==0){
          this.registroService.addUsuario(this.newRegistro).then(dato=>{ 
            this.newRegistro=<Usuario>{};
            this.showToast('Usuario Creado satisfactoriamente');
          });
          this.formularioRegistro.reset();
          this.navcontroller.navigateRoot('login');
        }else{
        
        for (let obj of this.usuarios){
          if (this.newRegistro.correoUsuario == obj.correoUsuario){
            existe = 1;
          }
        }//Fin del for
      
          if (existe == 1){
            this.alertCorreoDuplicado();
            this.formularioRegistro.reset();
          }
          else{
            this.registroService.addUsuario(this.newRegistro).then(dato=>{ 
              this.newRegistro=<Usuario>{};
              this.showToast('Usuario Creado satisfactoriamente');
            });
            this.formularioRegistro.reset();
            this.navcontroller.navigateRoot('login');
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























  
  mostrarMenu(){
    this.menuController.open('first');
  }

  password(formularioRegistro: FormGroup) {
    const  password  = formularioRegistro.get('password');
    const   confirmaPass  = formularioRegistro.get('confirmaPass');
    return password === confirmaPass ? null : { passwordNotMatch: true };
  }


}