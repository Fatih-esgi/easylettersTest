import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class IosInstallToastService {
  constructor(private _toast: ToastController) {}

  async displayPopUpInstall() {
    const toast = await this._toast.create({
      message: `Installer EasyLetters sur votre appareil? `,
      position: 'bottom',
      keyboardClose: true,
      color: 'dark',
      buttons: [
        {
          text: 'ok',
          role: 'cancel',
          handler: () => {},
        },
      ],
    });
    await toast.present();
  }
}
