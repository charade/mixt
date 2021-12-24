import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private _active$ : BehaviorSubject<boolean>;

  constructor() { 
    this._active$ = new BehaviorSubject<boolean>(false);
  };

  getState(): Observable<boolean>{
    return this._active$.asObservable().pipe(distinctUntilChanged());
  }

  setState(state : boolean): void{
    this._active$.next(state)
  }
}
