import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ZmaduPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zmadu',
  templateUrl: 'zmadu.html',
})
export class ZmaduPage {
  DECIMAL_SEPARATOR=".";
  GROUP_SEPARATOR=".";
  hargaBerasFormat;
  jumlahMaduFormat;
  pengeluaranFormat;
  buttonClicked: boolean = false;
  jumlahMadu;
  hargaBeras;
  pMadu1;
  jumlah;
  jenisTanah;
  nishab;
  pMadu2;
  pengeluaran;
  jumlah2;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZmaduPage');
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
    this.jumlahMadu = this.unFormat(this.jumlahMaduFormat);
    this.pengeluaran = this.unFormat(this.pengeluaranFormat);
    this.nishab = this.hargaBeras * 652.8;
    this.buttonClicked = false;
    if (this.jumlahMadu == null || this.jumlahMadu == 0 || this.hargaBeras == 0 || this.hargaBeras == null) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Silahkan Isi Field',
        buttons: ['Ok']
      });
      alert.present();
    } else if (this.jumlahMadu < 0 || this.jumlahMadu > 100000000) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Hasil Madu yang Dapat Diinputkan Adalah Rp. 1 - Rp. 100.000.000',
        buttons: ['Ok']
      });
      alert.present();
    } else if (this.hargaBeras < 0 || this.hargaBeras > 100000000) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Harga Beras yang Dapat Diinputkan Adalah Rp. 1 - Rp. 100.000.000',
        buttons: ['Ok']
      });
      alert.present();
    }
    else {
      this.buttonClicked = true;
      this.jumlah = this.jumlahMadu - this.pengeluaran;
      if (this.jumlah < this.nishab) {
        this.pMadu1 = "Anda Tidak Wajib Zakat";
      } else {
        if (this.jenisTanah) {
          this.jumlah2 = (((this.jumlah * 5) / 100));
          this.pMadu1 = "Rp. " + this.jumlah2.toLocaleString('id');
          this.pMadu2 = "NISAB (Minimal Hasil) Hasil madu adalah setara dengan 652,8 Kg makanan pokok. Zakat yang harus anda" + 
          " bayar Rp " + this.jumlah2.toLocaleString('id');
        } else {
          this.jumlah2 = (((this.jumlah * 10) / 100));
          this.pMadu1 = "Rp. " + this.jumlah2.toLocaleString('id');
          this.pMadu2 = "NISAB (Minimal Hasil) Hasil madu adalah setara dengan 652,8 Kg makanan pokok. Zakat yang harus anda" + 
          " bayar Rp " + this.jumlah2.toLocaleString('id');
        }
      }
    }
  }

}
