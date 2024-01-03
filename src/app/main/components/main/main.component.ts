import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements AfterViewInit, OnInit {
  @ViewChild('navItems') navItems: ElementRef | undefined;

  selectorStyle: { [key: string]: string } = {};
  isNavbarCollapsed = false;
  activeItem: any | HTMLElement;

  constructor(private renderer: Renderer2) {}
  ngOnInit() {
    this.selectNavItem('Dashboard');
  }
  ngAfterViewInit() {
    this.updateSelector();
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
    setTimeout(() => {
      this.updateSelector();
    });
  }

  selectNavItem(item: string) {
    console.log(item, 'item');
    if (this.navItems) {
      console.log(this.navItems);
      this.navItems.nativeElement.childNodes.forEach((navItem: any) => {
        this.renderer.removeClass(navItem, 'active');
      });

      const targetNavItem = Array.from(
        this.navItems.nativeElement.childNodes
      ).find((navItem: any) => navItem.textContent.includes(item));
      if (targetNavItem) {
        console.log('targetNavItem', targetNavItem);
        this.renderer.addClass(targetNavItem, 'active');
        this.updateSelector();
      }
    }
  }

  updateSelector() {
    if (this.navItems) {
      const nodeElements = this.navItems.nativeElement.childNodes;
      nodeElements.forEach((nodeElement: any) => {
        if (nodeElement.classList.contains('active')) {
          this.activeItem = nodeElement;
        }
      });
      console.log('activeItem');
      if (this.activeItem) {
        const itemPosition = this.activeItem.getBoundingClientRect();
        const navbarPosition =
          this.navItems.nativeElement.getBoundingClientRect();

        let activeElementWidth = window.getComputedStyle(this.activeItem);

        this.selectorStyle = {
          top: itemPosition.top - navbarPosition.top + 'px',
          left: this.activeItem.offsetLeft + 'px',
          height: activeElementWidth.height,
          width: activeElementWidth.width,
        };
      }
    }
  }

  // -----------
  navigate(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
