import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MostrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostrar',
  templateUrl: 'mostrar.html',
})
export class MostrarPage {
  
  avatar='';
  nombre= '';
  correo='';
  telefono='';
  facebook='';
  twitter= '';
  instagram= '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.avatar= this.navParams.get('avatar');
    this.nombre= this.navParams.get('nombre');
    this.correo= this.navParams.get('correo');
    this.telefono= this.navParams.get('telefono');
    this.facebook= this.navParams.get('facebook');
    this.twitter= this.navParams.get('twitter');
    this.instagram= this.navParams.get('instagram');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MostrarPage');
  }

}
