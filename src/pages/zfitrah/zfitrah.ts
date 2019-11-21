import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// import createNumberMask from 'text-mask-addons/dist/createNumberMask';

/**
 * Generated class for the ZfitrahPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zfitrah',
  templateUrl: 'zfitrah.html'
})
export class ZfitrahPage {
  buttonClicked: boolean = false;
  hargaBerasFormat;
  hargaBeras;
  pFitrah2 = "";
  pFitrah1;
  jumlah = 0;
  DECIMAL_SEPARATOR=".";
  GROUP_SEPARATOR=".";

  // mask;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController
  ) {
    // this.mask = createNumberMask({
    //   prefix: '',
    //   suffix: '',
    //   includeThousandsSeparator: true,
    //   thousandsSeparatorSymbol: '.'
    // })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZfitrahPage');
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
    this.buttonClicked = false;
    this.hargaBeras = this.unFormat(this.hargaBerasFormat);
    if (this.hargaBeras == null || this.hargaBeras == 0) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Silahkan Masukkan Harga beras',
        buttons: ['Ok']
      });
      alert.present();
    } else if (this.hargaBeras < 0 || this.hargaBeras >10000000) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Harga Beras yang Dapat Diinputkan Adalah Rp. 1 - Rp. 1.000.000',
        buttons: ['Ok']
      });
      alert.present();
    } else {
      this.jumlah = this.hargaBeras * 2.5;
      this.pFitrah1 = "Rp. " + (this.jumlah.toLocaleString('id'));
      this.buttonClicked = true;
      //this.pFitrah2 = "Zakat fitrah yang harus anda keluarkan adalah Rp. " + this.jumlah;
    }
  }

}
