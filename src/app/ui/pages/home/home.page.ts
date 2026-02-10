import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Page } from '../../../core/abstract/page.abstract';
import { HomeIntersectionEvent } from '../../../core/events/home-intersection.event';
import { Button } from '../../atoms/button/button';
import { Text } from '../../atoms/text/text';
import { Intersectable } from '../../directives/intersectable/intersectable';

@Component({
  selector: 'hack-home',
  imports: [Text, Button, Intersectable],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage extends Page implements AfterViewInit, OnDestroy {
  name = 'home';
  private _intersectionObserver!: IntersectionObserver;

  ngAfterViewInit(): void {
    this._intersectionObserver = new IntersectionObserver(
      (entries) => {
        const homeEntry = entries[0];
        const isIntersecting = homeEntry.isIntersecting;
        this._eventBus.emit(new HomeIntersectionEvent(isIntersecting));
      },
      { rootMargin: '-70% 0% 0% 0%' },
    );
    this._intersectionObserver.observe(this._ref.nativeElement);
  }

  ngOnDestroy(): void {
    this._intersectionObserver.disconnect();
  }
}
