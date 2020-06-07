import { Component } from '@angular/core';
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  fingerprintOptions: FingerprintOptions;
  res = '';

  constructor(
    private fingerAuth: FingerprintAIO
  ) { }

  async showFingerprintAuthDlg() {
    this.fingerprintOptions = {
      title: 'fingerprint-Demo',
      subtitle: 'Coolest Plugin ever',
      description: 'Please authenticate',
      disableBackup: false
    }
    const result = await this.fingerAuth.isAvailable();
    try {
      // result is finger/biometric (android) , ios is face
      if (['finger', 'biometric'].indexOf(result) >= 0) {
        let res = await this.fingerAuth.show(this.fingerprintOptions);
        this.res = res;
      }
    }

    catch (error) {
      this.res = error;
    }
    
    // this.fingerAuth.isAvailable().then(result => {
    //   // result is finger/biometric (android) , ios is face
    //   this.fingerAuth.show(this.fingerprintOptions)
    //     .then((result: any) => console.log(result))
    //     .catch((error: any) => console.log(error));
    // });
  }
}
