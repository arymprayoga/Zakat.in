import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ZsahamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zsaham',
  templateUrl: 'zsaham.html',
})
export class ZsahamPage {
  GROUP_SEPARATOR=".";
  DECIMAL_SEPARATOR=".";
  jumlahSahamFormat;pengeluaranFormat;devidenFormat;hargaEmasFormat;
  jumlahHartaFormat;jumlahHarta;
  buttonClicked: boolean = false;
  jumlah; jumlahSaham: number; jenisSaham; pSaham1;
  pengeluaranInput: boolean = false;
  pengeluaran: number;
  jenisSahamInput: boolean = false;
  nishab;
  deviden: number;
  jumlah2;
  hargaEmas;
  jenis;
  hargaEmasInput: boolean = false;
  jumlahHartaInput: boolean = false;
  devidenInput: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZsahamPage');
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
    this.deviden = this.unFormat(this.devidenFormat);
    this.jumlahSaham = this.unFormat(this.jumlahSahamFormat);
    this.pengeluaran = this.unFormat(this.pengeluaranFormat);
    this.jumlahHarta = this.unFormat(this.jumlahHartaFormat);
    this.buttonClicked = false;
    if (this.hargaEmas == 0 || this.hargaEmas == null) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Silahkan Isi Field',
        buttons: ['Ok']
      });
      alert.present();
    } else if (this.deviden < 0 || this.deviden > 99000000000000) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Deviden yang Dapat Diinputkan Adalah Rp. 1 - Rp. 99.000.000.000.000',
        buttons: ['Ok']
      });
      alert.present();
    } else if (this.hargaEmas < 0 || this.hargaEmas > 1000000) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Harga Emas yang Dapat Diinputkan Adalah Rp. 1 - Rp. 1.000.000',
        buttons: ['Ok']
      });
      alert.present();
    } else {
      if(this.jenis == "obligasi"){
        this.buttonClicked = true;
        this.nishab = this.hargaEmas * 85;
        if(this.jumlahHarta < this.nishab){
          this.pSaham1 = "Anda Tidak Wajib Zakat";
        }else{
          this.jumlah = ((this.jumlahHarta * 2.5) / 100);
          this.pSaham1 = "Rp. " + this.jumlah.toLocaleString('id');
        }
      }
      if (this.jenisSaham == "murni") {
        this.buttonClicked = true;
        this.nishab = this.hargaEmas * 85;
        if (this.deviden < this.nishab) {
          this.pSaham1 = "Anda Tidak Wajib Zakat";
        } else {
          this.jumlah = ((this.deviden * 10) / 100);
          this.pSaham1 = "Rp. " + this.jumlah.toLocaleString('id');
        }
      } else if (this.jenisSaham == "dagang") {
        this.buttonClicked = true;
        this.nishab = this.hargaEmas * 85;
        this.jumlah = (this.jumlahSaham - this.pengeluaran) * 1 + (this.deviden * 1);
        if (this.jumlah < this.nishab) {
          this.pSaham1 = "Anda Tidak Wajib Zakat";
        } else {
          this.jumlah2 = (((this.jumlah * 2.5) / 100));
          this.pSaham1 = "Rp. " + this.jumlah2.toLocaleString('id');
        }
      }


      // this.pGali2 = "NISAB (Minimal Hasil) Harta Galian adalah 652,8 Kg. Zakat yang harus anda" +
      //   " bayar Rp " + this.jumlah.toLocaleString('id');

    }
  }

  showPengeluaran() {
    if (this.jenisSaham == "dagang") {
      this.pengeluaranInput = true;
      this.jumlah = 0;
      this.jumlah2 = 0;
      this.hargaEmasInput = true;
      this.devidenInput = true;
    } else if (this.jenisSaham == "murni") {
      this.pengeluaranInput = false;
      this.jumlah = 0;
      this.jumlah2 = 0;
      this.hargaEmasInput = true;
      this.devidenInput = true;
    }
  }

  showJenis(){
    if(this.jenis == "saham"){
      this.jenisSahamInput = true;
      this.jumlahHartaInput = false;
    } else if(this.jenis == "obligasi"){
      this.jenisSahamInput = false;
      this.hargaEmasInput = true;
      this.jumlahHartaInput = true;
      this.pengeluaranInput = false;
    }
  }

}
