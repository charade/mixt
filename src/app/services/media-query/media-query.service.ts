import { Injectable, Component } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, fromEvent, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DeviceSize } from '../../../assets/device-sizes';

@Injectable({
  providedIn: 'root'
})

export class MediaQueryService {
  private change : Observable<Event>;
  private load : Observable<Event>;

  constructor() {
   this.change = new Observable();
   this.load = new Observable();
  }

  watch(): Observable<Event>{
    this.change =  fromEvent(window, 'resize').pipe(distinctUntilChanged())
    this.load = fromEvent(window, 'load');
    
    return merge(this.change, this.load);
  }

}
