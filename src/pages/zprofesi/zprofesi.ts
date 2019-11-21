import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ZprofesiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zprofesi',
  templateUrl: 'zprofesi.html',
})
export class ZprofesiPage {
  DECIMAL_SEPARATOR = ".";
  GROUP_SEPARATOR = ".";
  buttonClicked: boolean = false;
  hargaBeras;
  pKotor;
  pKotorFormat;
  hargaBerasFormat;
  pProf1 = "";
  nisab;
  jumlah;
  pProf2;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZprofesiPage');
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
    this.hargaBeras = this.unFormat(this.hargaBerasFormat);
    this.pKotor = this.unFormat(this.pKotorFormat);
    this.buttonClicked = false;
    if (this.hargaBeras == null || this.pKotor == null || this.hargaBeras == 0 || this.pKotor == 0) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Silahkan Isi Field',
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
    } else if (this.pKotor < 0 || this.pKotor > 1000000000000) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Penghasilan Kotor yang Dapat Diinputkan Adalah Rp. 1 - Rp. 1.000.000.000.000',
        buttons: ['Ok']
      });
      alert.present();
    } else {
      this.nisab = this.hargaBeras * 524;
      if (this.pKotor < this.nisab) {
        this.pProf1 = "Anda Tidak Wajib Zakat";
        this.buttonClicked = true;
      } else {
        this.buttonClicked = true;
        this.jumlah = ((this.pKotor * 2.5) / 100);
        this.pProf1 = "Rp. " + this.jumlah.toLocaleString('id');
        this.pProf2 = "NISAB (Minimal Hasil) Profesi adalah setara dengan 524 Kg Makanan Pokok. Zakat yang harus anda" + 
          " bayar Rp " + this.jumlah.toLocaleString('id');
      }
    }
  }
}
