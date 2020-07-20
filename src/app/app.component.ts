import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-ngrx-counter';
  counter$: Observable<number>;

  constructor(private store: Store<{counter: number}>){
    // this.counter = store.select('count');
    this.counter$ = store.pipe(select('counter'));
  }
  increment() {
    this.store.dispatch({type: 'INCREMENT'});
  }

  decrement() {
    this.store.dispatch({type: 'DECREMENT'});
  }

  reset() {
    this.store.dispatch({type: 'RESET'});
  }
}
