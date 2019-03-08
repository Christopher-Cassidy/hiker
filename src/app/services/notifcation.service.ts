import { Injectable } from '@angular/core';
import { enableBindings } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class NotifcationService {

  constructor() { }

  public get isSupported(): boolean {
    var supported = "Notification" in window;
    if (!supported)
      console.log("This browser does not support desktop notification");
    return supported;
  }

  public get isEnabled(): boolean {
    return "Notification" in window && Notification.permission === "granted";
  }

  public enable(): Promise<boolean> {
    return Notification.requestPermission().then(function (permission) {
      var enabled = permission === "granted";
      console.log("notification permission denied");        
      return enabled
    }).catch(function (e) {
      console.error(e);
      return false;
    });
  }

  public Send(message: string, options?: NotificationOptions): Promise<Notification> {
    if (!this.isEnabled) {
      return this.enable().then(function (enabled) {        
        if (!enabled) {
          return null;
        }

        return new Notification(message);
      }).catch(function(e) {

        return null;
      });
    } else {
      return new Promise(function(resolve, reject) {
        resolve(new Notification(message, options));
      });
    }
  }
}
