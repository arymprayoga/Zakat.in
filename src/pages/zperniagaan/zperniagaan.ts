import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ZperniagaanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zperniagaan',
  templateUrl: 'zperniagaan.html',
})
export class ZperniagaanPage {
  DECIMAL_SEPARATOR=".";
  GROUP_SEPARATOR=".";
  modalFormat;untungFormat;piutangFormat;hargaEmasFormat;rugiFormat;
  buttonClicked: boolean = false;
  modal: number;untung: number;piutang : number;rugi : number;hargaEmas: number;
  nishab;
  jumlah: number;
  pNiaga1;
  pNiaga2;
  jumlah2: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZperniagaanPage');
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
    this.modal = this.unFormat(this.modalFormat);
    this.untung = this.unFormat(this.untungFormat);
    this.rugi = this.unFormat(this.rugiFormat);
    this.piutang = this.unFormat(this.piutangFormat);
    this.hargaEmas = this.unFormat(this.hargaEmasFormat);
    this.buttonClicked = false;
    if (this.modal == null || this.modal == 0 || 
      this.untung == 0 || this.untung == null ||
      this.piutang == null ||
      this.rugi == null ||
      this.hargaEmas == 0 || this.hargaEmas == null) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Silahkan Isi Field',
        buttons: ['Ok']
      });
      alert.present();
    } else if (this.modal < 0 || this.modal > 1000000000000) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Modal yang Dapat Diinputkan Adalah Rp. 1 - Rp. 1.000.000.000.000',
        buttons: ['Ok']
      });
      alert.present();
    } else if (this.untung < 0 || this.untung > 1000000000000) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Keuntungan yang Dapat Diinputkan Adalah Rp. 1 - Rp. 1.000.000.000.000',
        buttons: ['Ok']
      });
      alert.present();
    } else if (this.piutang < 0 || this.piutang > 1000000000000) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Piutang yang Dapat Diinputkan Adalah Rp. 1 - Rp. 1.000.000.000.000',
        buttons: ['Ok']
      });
      alert.present();
    } else if (this.rugi < 0 || this.rugi > 1000000000000) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Kerugian dan Hutang yang Dapat Diinputkan Adalah Rp. 1 - Rp. 1.000.000.000.000',
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
    } 
    else {
      this.buttonClicked = true;
      this.jumlah = this.modal * 1 + this.piutang * 1 + this.untung * 1 - this.rugi * 1;
      this.nishab = this.hargaEmas * 85;
      if (this.jumlah < this.nishab) {
        this.pNiaga1 = "Anda Tidak Wajib Zakat";
      } else {
          console.log(this.jumlah);
          this.jumlah2 = ((this.jumlah * 2.5) / 100);
          this.pNiaga1 = "Rp. " + this.jumlah2.toLocaleString('id');
          this.pNiaga2 = "NISAB (Minimal Hasil) Perniagaan adalah 85 gr emas. Zakat yang harus anda" + 
          " bayar Rp " + this.jumlah2.toLocaleString('id');
      }
    }
  }

}
