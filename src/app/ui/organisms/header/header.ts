import { Component, inject, OnInit } from '@angular/core';
import { EventBus } from '../../../core/events/event-bus/event-bus';
import { PageChangeEvent } from '../../../core/events/page-change.event';
import { Button } from '../../atoms/button/button';

@Component({
  selector: 'hack-header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  private readonly _eventBus = inject(EventBus);
  private _actualPage = 'home';
  ngOnInit(): void {
    this._eventBus.on(PageChangeEvent).subscribe(({ PageName }) => {
      console.log(PageName);
      this._actualPage = PageName;
    });
  }
  protected GetMode(page: string) {
    return this._actualPage == page ? 'clear' : 'transparent';
  }
}
