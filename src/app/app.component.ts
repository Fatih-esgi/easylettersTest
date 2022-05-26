import { Component } from '@angular/core';
import { CheckdeviceService } from './@services/update&devices/checkdevice.service';
import { UpdatesService } from './@services/update&devices/updates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'easy-letters';

  constructor(
    private _checkDevice: CheckdeviceService,
    private _checkUpdates: UpdatesService
  ) {
    this._checkDevice.checkDevice();
    this._checkUpdates.checkUpdates();
  }
}
