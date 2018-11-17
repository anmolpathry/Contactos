import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  Nombre='';
  Telefono='';
  Correo='';
  Facebook='';
  Twitter='';
  Instagram='';
  Contactos= [];
  


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController) {

    this.Contactos = this.navParams.get("Contactos");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

  ClickAgregar(){
    if(this.Nombre.length > 0 || this.Telefono.length > 0){

     this.Contactos.push({nombre: this.Nombre, telefono: this.Telefono, 
      correo: this.Correo, facebook: this.Facebook, twitter: this.Twitter, 
      Instagram: this.Instagram, avatar: "../assets/avatar4.jpg" })
    
    }

    else{
      const alert = this.alertCtrl.create({
       title: 'Oops',
       subTitle: 'El contacto debe tener nombre y telefono',
       buttons: ['OK']
      });
      alert.present();
    }

  }

}
