import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar';
import { MostrarPage } from '../mostrar/mostrar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  agrega= AgregarPage;
  muestra= MostrarPage;

  Contactos = [

  {
    nombre: "Anmol Pathry",
    telefono: "(33) 13447895",
    correo: "anmolitasweet@gmail.com",
    facebook: "apathry",
    twitter: "a.sweet",
    instagram: "anmol01",
    avatar: "../assets/avatar1.jpg"
  },

  {
    nombre: "Ian Wesley",
    telefono: "(33) 17545895",
    correo: "wesleyi@gmail.com",
    facebook: "ianwesley",
    twitter: "wesley.rocks",
    instagram: "ian.18",
    avatar: "../assets/avatar2.jpg"
  },

  {
    nombre: "Steve Andrews",
    telefono: "(33) 14569875",
    correo: "stevedrews@gmail.com",
    facebook: "steve.andrews",
    twitter: "andrews.15",
    instagram: "heyiamsteve",
    avatar: "../assets/avatar3.jpg"
  }


  ]


  constructor(public navCtrl: NavController) {

  }

  clickAgregar(contacto){
   this.navCtrl.push(this.agrega, {Contactos: this.Contactos});
  
  }

  ClickMostrar(contacto){
   this.navCtrl.push(this.muestra, contacto);
  }

}
