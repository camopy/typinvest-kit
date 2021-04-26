import { writable, Writable } from 'svelte/store';

class Notification {
  constructor(
    public message : Writable<string>,
    public type : Writable<string>
  ) {}

  showSuccessNotification(message : string) : void {
    this.setSuccessNotification(message);
    this.clearNotificationTimeout();
  }

  showWarningNotification(message : string) : void {
    this.setWarningNotification(message);
    this.clearNotificationTimeout();
  }

  showErrorNotification(message : string) : void {
    this.setErrorNotification(message);
    this.clearNotificationTimeout();
  }

  setSuccessNotification(message : string) : void {
    this.message.set(message);
    this.type.set('success');
  }

  setWarningNotification(message : string) : void {
    this.message.set(message);
    this.type.set('warning');
  }

  setErrorNotification(message : string) : void {
    this.message.set(message);
    this.type.set('error');
  }

  clearNotificationTimeout() {
    setTimeout(() => {
      this.message.set("");
      this.type.set("");
    }, 3000);
  }
}


export const notification = new Notification(writable(""), writable(""));