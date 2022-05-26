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
    const updatesAvailable = this._updates.versionUpdates.pipe(
      filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
      map((evt) => ({
        type: 'UPDATE_AVAILABLE',
        current: evt.currentVersion,
        available: evt.latestVersion,
      }))
    );
    return updatesAvailable;
  }
}
