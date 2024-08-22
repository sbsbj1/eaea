import { Component, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import {GoogleMap,MapType} from '@capacitor/google-maps';
import { environment } from '../../../environments/environment';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

declare var google;
@Component({
  selector: 'app-found-p',
  templateUrl: './found-p.page.html',
  styleUrls: ['./found-p.page.scss'],
})
export class FoundPPage implements OnInit {

  @NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })

  @ViewChild('map') mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;

  center: any = {
    lat: -33.51114746243111,  
    lng: -70.75249756673333,
  };
  markerId:string;



  map: any;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  // parque simon bolivar
  origin = { lat: -33.511192189778654,  lng: -70.75255121091148 };
  // Parque la 93
  destination = { lat: -33.51134426258735,  lng: -70.75342024660348 };


  constructor(private menuController:MenuController,private alertController: AlertController ,
    private navController: NavController) { }

  ngOnInit() {
  }


  ngAfterViewInit(){
    this.createMap();
  }

  async createMap() {
    try {
      this.newMap = await GoogleMap.create({
        id: 'capacitor-google-maps',
        element: this.mapRef.nativeElement,
        apiKey: environment.GoogleApi,
        config: {
          center: this.center,
          zoom: 13,
        },
      });

      // Move the map programmatically
      await this.newMap.setCamera({
        coordinate: {
          lat: this.center.lat,
          lng: this.center.lng,
          // lat: 28.782991, 
          // lng: 76.945626,
        },
        animate: true
      });
      
        // Enable marker clustering
      // await this.newMap.enableClustering();

        // Enable traffic Layer
        await this.newMap.enableTrafficLayer(true);

        await this.newMap.enableCurrentLocation(true);
  
        // await this.newMap.setPadding({
        //   top: 50,
        //   left: 50,
        //   right: 0,
        //   bottom: 0,
        // });
  
        // await this.newMap.setMapType(MapType.Satellite);
    
        this.addMarkers(this.center.lat, this.center.lng);
        this.addListeners();
      } catch(e) {
        console.log(e);
      }
    }


    async addMarkers(lat, lng) {
      // Add a marker to the map
      // if(this.markerId) this.removeMarker();
      await this.newMap.addMarkers([
        {
          coordinate: {
            lat: lat,
            lng: lng,
          },
          // title: ,
          draggable: true
        },
        {
          coordinate: {
            lat: 28.782991, 
            lng: 76.945626,
          },
          // title: ,
          draggable: true
        },
      ]);
    }




  


    async addMarker(lat, lng) {
      // Add a marker to the map
      // if(this.markerId) this.removeMarker();
      this.markerId = await this.newMap.addMarker({
        coordinate: {
          lat: lat,
          lng: lng,
        },
        // title: ,
        draggable: true
      });
    }


  async removeMarker(id?) {
    await this.newMap.removeMarker(id ? id : this.markerId);
  }



  async addListeners() {
    // Handle marker click
    await this.newMap.setOnMarkerClickListener((event) => {
      console.log('setOnMarkerClickListener', event);
      this.removeMarker(event.markerId);
    });

    // await this.newMap.setOnCameraMoveStartedListener((event) => {
    //   console.log(event);
    // });

    await this.newMap.setOnMapClickListener((event) => {
      console.log('setOnMapClickListener', event);
      this.addMarker(event.latitude, event.longitude);
    });

    await this.newMap.setOnMyLocationClickListener((event) => {
      console.log('setOnMyLocationClickListener', event);
      this.addMarker(event.latitude, event.longitude);
    });
  }









 


  
  
  
  private calculateRoute() {
    this.directionsService.route({
      origin: this.origin,
      destination: this.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (response, status)  => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsDisplay.setDirections(response);
      } else {
        alert('No pudimos calcular la ruta :C: ' + status);
      }
    });
    }

  
  mostrarMenu(){
    this.menuController.open('second');
  }

  


  async presentAlert() {
    const alert = await this.alertController.create({
      header: '✔️Confirmaste la llega✔️',
      
      message: 'Gracias por usar TellevoApp😍',
      buttons: ['Confirmar'],
    });

    await alert.present();
  }

  


  async exit(){
    const alerta= await this.alertController.create({
      header: 'Gracias por visitarnos!',
      buttons:['ok'],
      mode:'ios'
    })
    await alerta.present();
    localStorage.removeItem('Conductor');
    this.navController.navigateRoot('/buthome');

    
  


    
  }


  Logout(){
    localStorage.removeItem('Conductor');
    this.navController.navigateRoot('login');
  }




}
