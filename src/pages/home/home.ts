import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 private url: any = this.sanitize.bypassSecurityTrustResourceUrl("https://www.gknetwork.net.br/central/"); 
  constructor(public navCtrl: NavController,
              private sanitize: DomSanitizer) {

  }
}

