import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-ngrx-counter';
  counter: Observable<number>;

  constructor(private store: Store<number>){
    this.counter = store.select('counter');
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
