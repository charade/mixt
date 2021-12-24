import { Injectable, Component } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DeviceSize } from '../../../assets/device-sizes';

@Injectable({
  providedIn: 'root'
})

export class MediaQueryService {
  
  constructor() {}

  matches(device : DeviceSize): Observable<boolean>{
    const mediaQuery = window.matchMedia(device);
    return fromEvent(mediaQuery, 'change').pipe(map(() => mediaQuery.matches), distinctUntilChanged())
  }

}
