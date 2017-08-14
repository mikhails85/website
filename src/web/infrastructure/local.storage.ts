import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class LocalStorageService {

  constructor(@Inject(PLATFORM_ID) protected platformId: Object) {}

  setItem(key: string, value: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
  
  getItem(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      let str = localStorage.getItem(key);
      if(str)
      {
        return JSON.parse(str);   
      }      
    }
    return null;
  }

  removeItem(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(key);
    }
  }
}