import { Injectable, Component } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, fromEvent, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DeviceSize } from '../../../assets/device-sizes';

@Injectable({
  providedIn: 'root'
})

export class MediaQueryService {
  change : Observable<boolean>;
  load : Observable<boolean>;

  constructor() {
   this.change = new Observable();
   this.load = new Observable();
  }

  matches(device : DeviceSize): Observable<boolean>{
    const mediaQuery = window.matchMedia(device);
    this.change =  fromEvent(mediaQuery, 'change').pipe(map(() => mediaQuery.matches), distinctUntilChanged())
    this.load = fromEvent(window, 'load').pipe(map(() => mediaQuery.matches));
    
    return merge(this.change, this.load)
  }

}
