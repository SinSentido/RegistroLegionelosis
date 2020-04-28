import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
 
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private storage: Storage) { }

  saveUserId(userId: string){
    this.storage.ready().then(() => {
      this.storage.set("userId", userId);
    });
  }

  getUserId(){
    return this.storage.get('userId');
  }
}
