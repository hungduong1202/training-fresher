import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  constructor() {}

  set<D>(key: string, data: D) {
    const stringify = JSON.stringify(data);
    localStorage.setItem(key, stringify);
  }

  get(key: string) {
    const stringify = localStorage.getItem(key);

    if (stringify) {
      return JSON.parse(stringify);
    }
    return null;
  }

  remove(key: string) {
    if (key) {
      return localStorage.removeItem(key);
    }
    localStorage.clear();
  }
}
