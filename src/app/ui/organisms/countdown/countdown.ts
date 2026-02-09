import { Component, OnDestroy, OnInit } from '@angular/core';
import { Bold } from '../../atoms/bold/bold';
import { Title } from '../../atoms/title/title';
import { Intersectable } from '../../directives/intersectable/intersectable';

@Component({
  selector: 'hack-countdown',
  imports: [Title, Bold, Intersectable],
  templateUrl: './countdown.html',
  styleUrl: './countdown.css',
})
export class Countdown implements OnInit, OnDestroy {
  protected _days = 0;
  protected _hours = 0;
  protected _minutes = 0;
  protected _seconds = 0;

  protected _eventStarted = false;
  private readonly EVENT_DATE = 'Mar 09, 2026 09:00:00';

  private _interval!: number;

  ngOnInit(): void {
    this.CalculateTime();
    this._interval = setInterval(() => this.CalculateTime(), 1000);
  }

  ngOnDestroy(): void {
    this.ClearInterval();
  }

  private CalculateTime() {
    const eventDate = new Date(this.EVENT_DATE).getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    this._days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this._hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this._minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this._seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      this.ClearInterval();
      this._eventStarted = true;
    }
  }

  private ClearInterval() {
    if (this._interval) clearInterval(this._interval);
  }
}
