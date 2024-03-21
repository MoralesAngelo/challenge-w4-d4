import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { State } from '../model/state';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private state$: BehaviorSubject<State>;
  constructor() {
    this.state$ = new BehaviorSubject<State>({
      isCalling: false,
      phoneNumber: '',
    });
  }
  getState(): Observable<State> {
    return this.state$.asObservable();
  }
}
