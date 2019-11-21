import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ZpertanianPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zpertanian',
  templateUrl: 'zpertanian.html',
})
export class ZpertanianPage {
  GROUP_SEPARATOR=".";
  DECIMAL_SEPARATOR=".";
  jumlahTaniFormat;
  hargaBerasFormat;
  buttonClicked: boolean = false;
  pTani1;
  irigasi;
  jumlahTani;
  jumlah;
  jumlah2;
  hargaBeras;
  pTani2 = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZpertanianPage');
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
    this.jumlahTani = this.unFormat(this.jumlahTaniFormat);
    this.hargaBeras = this.unFormat(this.hargaBerasFormat);
    this.buttonClicked = false;
    if (this.jumlahTani == null || this.jumlahTani == 0 || this.hargaBeras == 0 || this.hargaBeras == null) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Silahkan Isi Field',
        buttons: ['Ok']
      });
      alert.present();
    } else if (this.jumlahTani < 0 || this.jumlahTani > 1000000) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Hasil Tani yang Dapat Diinputkan Adalah Rp. 1 - Rp. 1.000.000',
        buttons: ['Ok']
      });
      alert.present();
    } else if (this.hargaBeras < 0 || this.hargaBeras > 1000000) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Harga Beras yang Dapat Diinputkan Adalah Rp. 1 - Rp. 1.000.000',
        buttons: ['Ok']
      });
      alert.present();
    }
    else {
      this.buttonClicked = true;
      if (this.jumlahTani < 652.8) {
        this.pTani1 = "Anda Tidak Wajib Zakat";
      } else {
        if (this.irigasi) {
          this.jumlah = (((this.jumlahTani * 5) / 100) * this.hargaBeras);
          this.pTani1 = "Rp. " + this.jumlah.toLocaleString('id');
          this.pTani2 = "NISAB (Minimal Hasil) Hasil tani adalah setara dengan 652,8 Kg. Zakat yang harus anda" + 
          " bayar Rp " + this.jumlah.toLocaleString('id') + " / " + (this.jumlah / this.hargaBeras) + " Kg";
        } else {
          this.jumlah = (((this.jumlahTani * 10) / 100) * this.hargaBeras);
          this.pTani1 = "Rp. " + this.jumlah.toLocaleString('id');
          this.pTani2 = "NISAB (Minimal Hasil) Hasil tani adalah setara dengan 652,8 Kg. Zakat yang harus anda" + 
          " bayar Rp " + this.jumlah.toLocaleString('id') + " / " + (this.jumlah / this.hargaBeras) + " Kg";
        }
      }
    }
  }
}
