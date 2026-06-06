import { Directive, inject, Input } from '@angular/core';
import { EventBus } from '../../../core/events/event-bus/event-bus';
import { PageChangeRequestEvent } from '../../../core/events/page-change-request.event';

@Directive({
  selector: '[hackPageLink]',
  exportAs: 'PageLinkRef',
})
export class PageLink {
  @Input() Page!: string;
  private readonly _eventBus = inject(EventBus);

  Go() {
    console.log('going to: ', this.Page);
    this._eventBus.emit(new PageChangeRequestEvent(this.Page));
  }
}
