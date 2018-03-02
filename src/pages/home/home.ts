import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 private url: any = ""; 
  constructor(public navCtrl: NavController,
              private sanitize: DomSanitizer) {

  }
  urlpaste(){
    this.url = "https://www.gknetwork.net.br/central/";
    return this.sanitize.bypassSecurityTrustResourceUrl(this.url);
  }
}

