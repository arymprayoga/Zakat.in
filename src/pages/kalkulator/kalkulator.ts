import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ZfitrahPage } from '../zfitrah/zfitrah';
import { ZprofesiPage } from '../zprofesi/zprofesi';
import { ZpeternakanPage } from '../zpeternakan/zpeternakan';
import { ZpertanianPage } from '../zpertanian/zpertanian';
import { ZemasPage } from '../zemas/zemas';
import { ZmaduPage } from '../zmadu/zmadu';
import { ZperniagaanPage } from '../zperniagaan/zperniagaan';
import { ZhartagalianPage } from '../zhartagalian/zhartagalian';
import { ZsahamPage } from '../zsaham/zsaham';
import { ZlautPage } from '../zlaut/zlaut';

/**
 * Generated class for the KalkulatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kalkulator',
  templateUrl: 'kalkulator.html',
})
export class KalkulatorPage {



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KalkulatorPage');
  }

  // items = [
  //   'Zakat Fitrah',
  //   'Zakat Profesi',
  //   'Zakat Peternakan',
  //   'Zakat Pertanian',
  //   'Zakat Emas',
  //   'Zakat Perak',
  //   'Zakat Uang',
  //   'Zakat Madu',
  //   'Zakat Perniagaan',
  //   'Zakat Harta Galian',
  //   'Zakat Saham dan Obligasi'
  // ];

  // itemSelected(item: string) {
  //   console.log("Selected Item", item);
  //   if (item == "Zakat Fitrah") {
  //     this.navCtrl.push(ZfitrahPage);
  //   } else if (item == "Zakat Profesi") {
  //     this.navCtrl.push(ZprofesiPage);
  //   }
  //   // else if(item == "Zakat Peternakan"){
  //   //   this.navCtrl.push(ZpeternakanPage);
  //   // }
  //   else if (item == "Zakat Pertanian") {
  //     this.navCtrl.push(ZpertanianPage);
  //   } else if (item == "Zakat Emas") {
  //     this.navCtrl.push(ZemasPage);
  //   } else if (item == "Zakat Perak") {
  //     this.navCtrl.push(ZperakPage);
  //   }

  // }

  goToZFitrah(){
    this.navCtrl.push(ZfitrahPage);
  }

  goToZPertanian(){
    this.navCtrl.push(ZpertanianPage);
  }

  goToZProfesi(){
    this.navCtrl.push(ZprofesiPage);
  }

  goToZMadu(){
    this.navCtrl.push(ZmaduPage);
  }

  goToZPerniagaan(){
    this.navCtrl.push(ZperniagaanPage);
  }

  goToZHGalian(){
    this.navCtrl.push(ZhartagalianPage);
  }

  goToZSaham(){
    this.navCtrl.push(ZsahamPage);
  }

  goToZHLaut(){
    this.navCtrl.push(ZlautPage);
  }

  goToZPeternakan(){
    this.navCtrl.push(ZpeternakanPage);
  }

  goToZEmas(){
    this.navCtrl.push(ZemasPage);
  }

}
