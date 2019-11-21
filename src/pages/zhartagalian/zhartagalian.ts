import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ZhartagalianPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zhartagalian',
  templateUrl: 'zhartagalian.html',
})
export class ZhartagalianPage {
  DECIMAL_SEPARATOR=".";
  GROUP_SEPARATOR=".";
  jumlahHGalianFormat;
  jumlah; pGali1; pGali2; jumlahHGalian;
  buttonClicked: boolean = false;
  jenisHargal;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZhartagalianPage');
  }

  format(valString) {
    if (!valString) {
      return '';
    }
    let val = valString.toString();
    const parts = this.unFormat(val).split(this.DECIMAL_SEPARATOR);
    return parts[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, this.GROUP_SEPARATOR)

  };

  unFormat(val) {
    if (!val) {
      return '';
    }
    val = val.replace(/^0+/, '').replace(/\D/g, '');
    if (this.GROUP_SEPARATOR === ',') {
      return val.replace(/,/g, '');
    } else {
      return val.replace(/\./g, '');
    }
  };

  hitung() {
    this.jumlahHGalian = this.unFormat(this.jumlahHGalianFormat);
    this.buttonClicked = false;
    if (this.jumlahHGalian == null || this.jumlahHGalian == 0 || this.jenisHargal == null) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Silahkan Isi Field',
        buttons: ['Ok']
      });
      alert.present();
    } else if (this.jumlahHGalian < 0 || this.jumlahHGalian > 1000000000000) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Hasil Madu yang Dapat Diinputkan Adalah Rp. 1 - Rp. 1.000.000.000.000',
        buttons: ['Ok']
      });
      alert.present();
    } else {
      if (this.jenisHargal == "galian") {
        this.buttonClicked = true;
        this.jumlah = (((this.jumlahHGalian * 20) / 100));
        this.pGali1 = "Rp. " + this.jumlah.toLocaleString('id');
      } else if(this.jenisHargal == "tambang") {
        this.buttonClicked = true;
        this.jumlah = (((this.jumlahHGalian * 2.5) / 100));
        this.pGali1 = "Rp. " + this.jumlah.toLocaleString('id');
      }


      // this.pGali2 = "NISAB (Minimal Hasil) Harta Galian adalah 652,8 Kg. Zakat yang harus anda" +
      //   " bayar Rp " + this.jumlah.toLocaleString('id');

    }
  }


}
