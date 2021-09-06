import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ["Adam talyor","E2334","adamt@.net"]
  info2: string[] = ["sam taylor","E2335","sam@.net"]
  info3: string[] = ["Am talyor","E2336","am@.net"]

  getinfo1(): string[]{
    return this.info1
  }

  getinfo2(): string[]{
    return this.info2
  }
  getinfo3(): string[]{
    return this.info3
  }
  constructor() { }
}
