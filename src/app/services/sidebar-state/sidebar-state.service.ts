import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private activeSubjectBehavior$ : BehaviorSubject<boolean>;
  private activeSiberObservable$ : Observable<boolean> 

  constructor() { 
    this.activeSubjectBehavior$ = new BehaviorSubject<boolean>(false);
    this.activeSiberObservable$ = this.activeSubjectBehavior$.asObservable()
  };

  getState(): Observable<boolean>{
    return this.activeSiberObservable$.pipe(distinctUntilChanged());
  }

  setState(state : boolean): void{
    this.activeSubjectBehavior$.next(state)
  }
}

export enum SidebarState{
  ACTIVE = 'active',
  DEFAULT = 'default'
}
