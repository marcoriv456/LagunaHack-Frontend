import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  inject,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';

@Directive({
  selector: '[hackIntersectable]',
})
export class Intersectable implements AfterViewInit, OnDestroy {
  private _intersectionObserver!: IntersectionObserver;
  private readonly _ref: ElementRef<HTMLElement> = inject(ElementRef);
  @Input()
  Opts?: IntersectionObserverInit;

  @Input()
  BottomMargin!: string;
  @Input()
  TopMargin!: string;

  @Output() Intersection = new EventEmitter<boolean>();

  @HostBinding('class.intersected')
  protected _isIntersecting = false;

  ngAfterViewInit(): void {
    this._intersectionObserver = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        this.Intersection.emit(isIntersecting);
        this._isIntersecting = isIntersecting;
      },
      {
        rootMargin: `${this.TopMargin || '0%'} 0% ${this.BottomMargin || '0%'} 0%`,
        ...this.Opts,
      },
    );
    this._intersectionObserver.observe(this._ref.nativeElement);
  }

  ngOnDestroy(): void {
    this._intersectionObserver.disconnect();
  }
}
