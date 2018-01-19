import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  firstName: String = "";
  secondName: String = "";
  fullName: String = "";
  
  constructor(public navCtrl: NavController) {

  }

  submitForm() {
    this.fullName = this.firstName + " " + this.secondName;
  }

}
