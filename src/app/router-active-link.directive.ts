import { Directive, ElementRef, Input } from '@angular/core';

import { Router } from '@angular/router';

@Directive({
  selector: '[appRouterActiveLink]',
})
export class RouterActiveLinkDirective {
  @Input('appRouterActiveLink') linkPath: string | undefined;

  constructor(private elementRef: ElementRef, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      const currentPath = this.router.url.split('?')[0]; // Exclude query params
      if (currentPath === this.linkPath) {
        this.elementRef.nativeElement.classList.add('active');
      } else {
        this.elementRef.nativeElement.classList.remove('active');
      }
    });
  }
}
