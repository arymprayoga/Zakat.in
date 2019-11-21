import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ZemasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zemas',
  templateUrl: 'zemas.html',
})
export class ZemasPage {
  DECIMAL_SEPARATOR = ".";
  GROUP_SEPARATOR = ".";
  jumlahHartaFormat;
  hargaHartaFormat;
  buttonClicked: boolean = false;
  hargaEmasInput: boolean = true;
  uang: boolean = false;
  emas: boolean = true;
  pHarta1; pHarta2;
  jumlahUang; jumlahUangFormat;
  jumlahHarta;
  hargaHarta;
  jenisHarta;
  jenisHarta2 = "Jumlah Emas (gr)";
  jenisHarta3 = "Emas";
  jumlah;
  jumlah2;
  nishab;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZemasPage');
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
    this.hargaHarta = this.unFormat(this.hargaHartaFormat);
    this.jumlahHarta = this.unFormat(this.jumlahHartaFormat);
    this.jumlahUang = this.unFormat(this.jumlahUangFormat);
    this.buttonClicked = false;
    if (this.jenisHarta == null || this.hargaHarta == null || this.hargaHarta == 0) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Silahkan Isi Field',
        buttons: ['Ok']
      });
      alert.present();
    } else if (this.jumlahHarta < 0 || this.jumlahHarta > 10000000) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Angka yang Dapat Diinputkan Adalah Rp. 1 - Rp. 10.000.000',
        buttons: ['Ok']
      });
      alert.present();
    } else if (this.jumlahUang < 0 || this.jumlahUang > 100000000000000) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Angka yang Dapat Diinputkan Adalah Rp. 1 - Rp. 100.000.000.000.000',
        buttons: ['Ok']
      });
      alert.present();
    } else if (this.hargaHarta < 0 || this.hargaHarta > 10000000) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Angka yang Dapat Diinputkan Adalah Rp. 1 - Rp. 10.000.000',
        buttons: ['Ok']
      });
      alert.present();
    }
    else {
      if (this.jenisHarta == "emas") {

        this.buttonClicked = true;
        this.nishab = 85;
        if (this.jumlahHarta < this.nishab) {
          this.pHarta1 = "Anda Tidak Wajib Zakat";
        } else {

          this.jumlah = (this.jumlahHarta * this.hargaHarta);
          this.jumlah2 = (this.jumlah * 2.5) / 100;
          this.pHarta1 = "Rp. " + this.jumlah2.toLocaleString('id');
        }
      } else if (this.jenisHarta == "perak") {
        this.buttonClicked = true;

        this.nishab = 595;
        if (this.jumlahHarta < this.nishab) {
          this.pHarta1 = "Anda Tidak Wajib Zakat";
        } else {
          this.jumlah = (this.jumlahHarta * this.hargaHarta);
          this.jumlah2 = (this.jumlah * 2.5) / 100;
          this.pHarta1 = "Rp. " + this.jumlah2.toLocaleString('id');
        }
      } else if (this.jenisHarta == "uang") {
        this.buttonClicked = true;
        this.nishab = this.hargaHarta * 85;
        if (this.jumlahUang < this.nishab) {
          this.pHarta1 = "Anda Tidak Wajib Zakat";
        } else {
          this.jumlah = (this.jumlahUang * 2.5) / 100;
          this.pHarta1 = "Rp. " + this.jumlah.toLocaleString('id');
        }
      }


      // this.pGali2 = "NISAB (Minimal Hasil) Harta Galian adalah 652,8 Kg. Zakat yang harus anda" +
      //   " bayar Rp " + this.jumlah.toLocaleString('id');

    }
  }

  showJenisHarta() {
    if (this.jenisHarta == "emas") {
      this.uang = false;
      this.emas = true;
      this.jenisHarta2 = "Jumlah Emas (gr)";
      this.jenisHarta3 = "Emas";
    } else if (this.jenisHarta == "uang") {
      this.uang = true;
      this.emas = false;
      this.jenisHarta2 = "Jumlah Uang (Rp)";
      this.jenisHarta3 = "Emas";
    } else if (this.jenisHarta == "perak") {
      this.uang = false;
      this.emas = true;
      this.jenisHarta2 = "Jumlah Perak (gr)";
      this.jenisHarta3 = "Perak"
    }
  }
}
