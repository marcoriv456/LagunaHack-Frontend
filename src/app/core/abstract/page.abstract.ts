import { Directive, ElementRef, inject, OnInit } from '@angular/core';
import { EventBus } from '../events/event-bus/event-bus';
import { PageChangeRequestEvent } from '../events/page-change-request.event';
import { PageChangeEvent } from '../events/page-change.event';

@Directive()
export abstract class Page implements OnInit {
  protected abstract readonly name: string;
  protected readonly _eventBus = inject(EventBus);
  protected readonly _ref: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    this._eventBus.on(PageChangeRequestEvent).subscribe(({ PageName }) => {
      if (PageName == this.name) this.OnIntersectionRequest();
    });
  }
  protected OnIntersection(isIntersecting: boolean) {
    if (isIntersecting) this._eventBus.emit(new PageChangeEvent(this.name));
  }

  protected OnIntersectionRequest() {
    const top = this.name == 'home' ? 0 : this._ref.nativeElement.offsetTop;
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  }
}
