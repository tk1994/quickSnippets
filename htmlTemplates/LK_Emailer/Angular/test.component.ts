import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'cat-dashboard/reducers';
import { IncrementValue, DecrementValue } from 'action/counter';
import { getCounter } from 'selector/counter.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  counter$: Observable<number>;
  filters = [
    {
      label: 'some label',
      value: 'some value '
    },
    {
      label: 'some label',
      value: 'some value '
    },
    {
      label: 'some label',
      value: 'some value '
    },
    {
      label: 'some label',
      value: 'some value '
    }
  ];

  constructor(private store$: Store<State>) {}

  ngOnInit() {
    this.counter$ = this.store$.pipe(select(getCounter));
  }
  increment() {
    this.store$.dispatch(new IncrementValue());
  }

  decrement() {
    this.store$.dispatch(new DecrementValue());
  }
}
