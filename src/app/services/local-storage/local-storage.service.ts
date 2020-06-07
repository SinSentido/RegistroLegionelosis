import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
 
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  isLoggedIn: boolean = false;

  constructor(private storage: Storage) { }

  saveUserId(userId: string){
    this.storage.ready().then(() => {
      this.storage.set("userId", userId);
      this.isLoggedIn = true;
    });
  }

  getUserId(){
    return this.storage.get('userId');
  }

  removeUserId(){
    this.storage.ready().then(() => {
      this.storage.remove("userId");
      this.isLoggedIn = false;
    })
  }
}
