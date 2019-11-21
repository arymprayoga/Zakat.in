import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ZlautPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zlaut',
  templateUrl: 'zlaut.html',
})
export class ZlautPage {
  GROUP_SEPARATOR=".";
  DECIMAL_SEPARATOR=".";
  jumlahHLautFormat;pengeluaranFormat;hargaEmasFormat;
  buttonClicked: boolean = false;
  jumlah; jumlahHLaut; jenisLaut; pLaut1;
  pengeluaranInput: boolean = false;
  pengeluaran;
  nishab;
  hargaEmas;
  jumlah2;
  emasperak = "Perak";

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZlautPage');
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
    this.hargaEmas = this.unFormat(this.hargaEmasFormat);
    this.jumlahHLaut = this.unFormat(this.jumlahHLautFormat);
    this.pengeluaran = this.unFormat(this.pengeluaranFormat);
    this.buttonClicked = false;
    if (this.jumlahHLaut == null || this.jumlahHLaut == 0 || this.jenisLaut == null) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Silahkan Isi Field',
        buttons: ['Ok']
      });
      alert.present();
    } else if (this.jumlahHLaut < 0 || this.jumlahHLaut > 1000000000000) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Hasil Laut yang Dapat Diinputkan Adalah Rp. 1 - Rp. 1.000.000.000.000',
        buttons: ['Ok']
      });
      alert.present();
    } else {
      if (this.jenisLaut == "ambar") {
        this.buttonClicked = true;
        this.nishab = this.hargaEmas * 85;
        if (this.jumlahHLaut < this.nishab) {
          this.pLaut1 = "Anda Tidak Wajib Zakat";
        } else {
          this.jumlah = this.jumlahHLaut - this.pengeluaran;
          this.jumlah2 = (((this.jumlah * 20) / 100));
          this.pLaut1 = "Rp. " + this.jumlah2.toLocaleString('id');
        }
      } else if (this.jenisLaut == "ikan") {
        this.buttonClicked = true;
        this.nishab = this.hargaEmas * 595;
        if (this.jumlahHLaut < this.nishab) {
          this.pLaut1 = "Anda Tidak Wajib Zakat";
        } else {
          this.jumlah = (((this.jumlahHLaut * 20) / 100));
          this.pLaut1 = "Rp. " + this.jumlah.toLocaleString('id');
        }
      }


      // this.pGali2 = "NISAB (Minimal Hasil) Harta Galian adalah 652,8 Kg. Zakat yang harus anda" +
      //   " bayar Rp " + this.jumlah.toLocaleString('id');

    }
  }

  showPengeluaran() {
    if (this.jenisLaut == "ambar") {
      this.pengeluaranInput = true;
      this.emasperak = "Emas";
    } else if (this.jenisLaut == "ikan") {
      this.pengeluaranInput = false;
      this.emasperak = "Perak";
    }
  }

}
