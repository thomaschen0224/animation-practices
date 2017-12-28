import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";


@Component({
  selector: 'app-spin-practice',
  templateUrl: './spin-practice.component.html',
  styleUrls: ['./spin-practice.component.css'],
  animations: [trigger('menuState', [
    state('hide', style({ transform: 'rotate(0)' })),
    state('show', style({ transform: 'rotate(-180deg)' })),
    transition('void => *', [style({ transform: 'rotate(-180deg)' }), animate('1000ms ease')]),
    transition('hide => show', [style({ transform: 'rotate(-360deg)' }), animate('1000ms ease')]),
    transition('show => hide', animate('1000ms ease'))
  ])]
})
export class SpinPracticeComponent implements OnInit {

  state: string = 'hide';

  constructor() { }

  ngOnInit() {
  }

  toggleState() {
    this.state = this.state === 'hide' ? 'show' : 'hide';
  }


}
