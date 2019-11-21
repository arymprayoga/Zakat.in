import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ZpeternakanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zpeternakan',
  templateUrl: 'zpeternakan.html',
})
export class ZpeternakanPage {
  GROUP_SEPARATOR = ".";
  DECIMAL_SEPARATOR = ".";
  buttonClicked: boolean = false;
  jenisHewan;
  jumlahHewan;
  jumlahHewanFormat;
  pPet = "";
  jumlah = 0;
  iterasi;
  temp: number = 0;
  u3: number = 0; u2: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZpeternakanPage');
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
    this.jumlahHewan = this.unFormat(this.jumlahHewanFormat);
    this.buttonClicked = false;
    if (this.jenisHewan == null || this.jumlahHewan == null || this.jumlahHewan == 0) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Silahkan Isi Field',
        buttons: ['Ok']
      });
      alert.present();
    } else if (this.jumlahHewan < 0 || this.jumlahHewan > 10000) {
      let alert = this.alertCtrl.create({
        title: 'Inputan Salah',
        subTitle: 'Jumlah Hewan yang Dapat Diinputkan Adalah Rp. 1 - Rp. 10.000',
        buttons: ['Ok']
      });
      alert.present();
    } else {
      if (this.jenisHewan == "unta") {
        this.buttonClicked = true;
        if (this.jumlahHewan <= 4) {
          this.pPet = "Anda Tidak Wajib Zakat";
        } else if (this.jumlahHewan <= 9) {
          this.pPet = "1 Ekor Kambing";
        } else if (this.jumlahHewan <= 14) {
          this.pPet = "2 Ekor Kambing";
        } else if (this.jumlahHewan <= 19) {
          this.pPet = "3 Ekor Kambing";
        } else if (this.jumlahHewan <= 24) {
          this.pPet = "4 Ekor Kambing";
        } else if (this.jumlahHewan <= 35) {
          this.pPet = "1 Ekor Unta Betina 1 Tahun";
        } else if (this.jumlahHewan <= 45) {
          this.pPet = "1 Ekor Unta Betina 2 Tahun";
        } else if (this.jumlahHewan <= 60) {
          this.pPet = "1 Ekor Unta Betina 3 Tahun";
        } else if (this.jumlahHewan <= 75) {
          this.pPet = "1 Ekor Unta Betina 4 Tahun";
        } else if (this.jumlahHewan <= 90) {
          this.pPet = "2 Ekor Unta Betina 2 Tahun";
        } else if (this.jumlahHewan <= 120) {
          this.pPet = "2 Ekor Unta Betina 3 Tahun";
        }
        else if (this.jumlahHewan > 120) {
          this.temp = this.jumlahHewan;
          this.u2 = 0;
          this.u3 = 0;
          this.pPet = "";
          this.iterasi = 1;
          do {
            if ((this.temp % 50) < 9) {
              this.u3 = (this.temp - (this.temp % 50)) / 50;
              this.iterasi = 0;
            } else if ((this.temp % 40) < 9) {
              this.u2 = (this.temp - (this.temp % 40)) / 40;
              this.iterasi = 0;
            } else {
              this.temp = this.temp - 40;
              this.u2 = (this.u2 * 1) + 1 * 1;
            }
          } while (this.iterasi != 0);
          if (this.u2 > 0 && this.u3 > 0) {
            this.pPet = this.u3 + " Ekor Unta Betina 3 Tahun dan " + this.u2 + " Ekor Unta Betina 2 Tahun";
          } else if (this.u2 > 0 && this.u3 == 0) {
            this.pPet = this.u2 + " Ekor Unta Betina 2 Tahun";
          } else if (this.u3 > 0 && this.u2 == 0) {
            this.pPet = this.u3 + " Ekor Unta Betina 3 Tahun";
          }
        }
      } else if (this.jenisHewan == "sapi") {
        this.buttonClicked = true;
        if (this.jumlahHewan <= 29) {
          this.pPet = "Anda Tidak Wajib Zakat";
        } else if (this.jumlahHewan <= 39) {
          this.pPet = "1 Ekor Sapi 1 Tahun";
        } else if (this.jumlahHewan <= 59) {
          this.pPet = "1 Ekor Sapi Betina 2 Tahun";
        } else if (this.jumlahHewan <= 69) {
          this.pPet = "2 Ekor Sapi Jantan 1 Tahun";
        } else if (this.jumlahHewan <= 79) {
          this.pPet = "1 Ekor Sapi Betina 2 Tahun dan 1 Ekor Sapi Jantan 1 Tahun";
        } else if (this.jumlahHewan <= 89) {
          this.pPet = "2 Ekor Sapi Betina 2 Tahun";
        } else if (this.jumlahHewan <= 99) {
          this.pPet = "3 Ekor Sapi Jantan 1 Tahun";
        } else if (this.jumlahHewan <= 109) {
          this.pPet = "1 Ekor Sapi Betina 1 Tahun dan 2 Ekor Sapi Jantan 1 Tahun";
        } else if (this.jumlahHewan <= 119) {
          this.pPet = "2 Ekor Sapi Betina 2 Tahun dan 1 Ekor Sapi Jantan 1 Tahun";
        } else if(this.jumlahHewan == 120){
          this.pPet = "3 Ekor Sapi Betina 2 Tahun dan 3 Ekor Sapi Jantan 1 Tahun";
        } 
        else if (this.jumlahHewan > 120) {
          this.temp = this.jumlahHewan;
          this.u2 = 0;
          this.u3 = 0;
          this.pPet = "";
          this.iterasi = 1;
          do {
            if ((this.temp % 40) < 9) {
              this.u3 = (this.temp - (this.temp % 40)) / 40;
              this.iterasi = 0;
            } else if ((this.temp % 30) < 9) {
              this.u2 = (this.temp - (this.temp % 30)) / 30;
              this.iterasi = 0;
            } else {
              this.temp = this.temp - 30;
              this.u2 = (this.u2 * 1) + 1 * 1;
            }
          } while (this.iterasi != 0);
          if (this.u2 > 0 && this.u3 > 0) {
            this.pPet = this.u3 + " Ekor Sapi Betina 2 Tahun dan " + this.u2 + " Ekor Sapi Jantan/Betina 1 Tahun";
          } else if (this.u2 > 0 && this.u3 == 0) {
            this.pPet = this.u2 + " Ekor Sapi Jantan/Betina 1 Tahun";
          } else if (this.u3 > 0 && this.u2 == 0) {
            this.pPet = this.u3 + " Ekor Sapi Betina 2 Tahun";
          }
        }
      } else if (this.jenisHewan == "kambing") {
        this.buttonClicked = true;
        if (this.jumlahHewan <= 39) {
          this.pPet = "Anda Tidak Wajib Zakat";
        } else if (this.jumlahHewan <= 120) {
          this.pPet = "1 Ekor Kambing Dewasa";
        } else if (this.jumlahHewan <= 200) {
          this.pPet = "2 Ekor Kambing Dewasa";
        } else if (this.jumlahHewan > 200) {
          this.temp = this.jumlahHewan - 1;
          this.u3 = 1;
          this.u3 = (this.u3 * 1) + (((this.temp - (this.temp % 100)) / 100) * 1);
          this.pPet = this.u3 + " Ekor Kambing Dewasa";
        }
      }
    }
  }

  showJenisHewan() {
    this.buttonClicked = false;
  }

}
