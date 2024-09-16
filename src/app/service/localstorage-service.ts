import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    private storageKey = 'myAppData';

    setItem(key: string, value: string): void {
        localStorage.setItem(this.storageKey + '.' + key, value);
      }
    
      getItem(key: string): string {
        return localStorage.getItem(this.storageKey + '.' + key) || '';
      }
    
      removeItem(key: string): void {
        localStorage.removeItem(this.storageKey + '.' + key);
      }
    
      clear(): void {
        localStorage.clear();
      }

}