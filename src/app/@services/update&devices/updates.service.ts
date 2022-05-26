import { Injectable } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { UpdateToastService } from 'src/app/@services/toast/update-toast.service';
import { filter, map } from 'rxjs/operators';
// ...
@Injectable({
  providedIn: 'root',
})
export class UpdatesService {
  constructor(private _updates: SwUpdate, private _popup: UpdateToastService) {}
  checkUpdates() {
    this._updates.versionUpdates.subscribe((event) => {
      if (event) {
        this._popup.displayPopUpUpdate();
      }
    });
  }
}
