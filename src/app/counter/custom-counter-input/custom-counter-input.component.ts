import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {customIncrement} from '../state/counter.action';
import {CounterStateI} from '../state/counter.state';
import {getChannelName} from '../state/counter.selector';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {
  channelName: string
  value: number;

  constructor(private store: Store<{ counter: CounterStateI }>) {
  }

  ngOnInit(): void {
    this.store.select(getChannelName).subscribe(channelName=>{
      console.log('Channel Name Observable called')
      this.channelName = channelName
    })
  }

  onAdd() {
    this.store.dispatch(customIncrement({value: this.value}));
  }
}
