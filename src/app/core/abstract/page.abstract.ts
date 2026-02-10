import { Directive, inject } from '@angular/core';
import { EventBus } from '../events/event-bus/event-bus';
import { PageChangeEvent } from '../events/page-change.event';

@Directive()
export abstract class Page {
  protected abstract readonly name: string;
  protected readonly _eventBus = inject(EventBus);
  protected OnIntersection(isIntersecting: boolean) {
    if (isIntersecting) this._eventBus.emit(new PageChangeEvent(this.name));
  }
}
