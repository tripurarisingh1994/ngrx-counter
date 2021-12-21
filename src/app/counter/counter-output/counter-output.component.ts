import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CounterStateI} from '../state/counter.state';
import {getCounter} from '../state/counter.selector';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {

  counter$: Observable<number>;

  constructor(private store: Store<{ counter: CounterStateI }>) {
  }

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
  }

}
