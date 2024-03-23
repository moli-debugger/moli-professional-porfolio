import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  TimelineElement,
  TimelineEvent,
} from '../../Data/models/events-timeline.model';

import { Book } from '@labsforge/flipbook';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements AfterViewInit, OnInit {
  @ViewChild('navItems') navItems: ElementRef | undefined;
  content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae
  ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae,
  ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam
  quisquam, quae, temporibus dolores porro doloribus.`;

  timeline: TimelineElement[] = [
    {
      caption: '16 Jan',
      date: new Date(2014, 1, 16),
      selected: true,
      title: 'Horizontal Timeline',
      content: this.content,
    },
    {
      caption: '28 Feb',
      date: new Date(2014, 2, 28),
      title: 'Event title here',
      content: this.content,
    },
    {
      caption: '20 Mar',
      date: new Date(2014, 3, 20),
      title: 'Event title here',
      content: this.content,
    },
    {
      caption: '20 May',
      date: new Date(2014, 5, 20),
      title: 'Event title here',
      content: this.content,
    },
    {
      caption: '09 Jul',
      date: new Date(2014, 7, 9),
      title: 'Event title here',
      content: this.content,
    },
    {
      caption: '30 Aug',
      date: new Date(2014, 8, 30),
      title: 'Event title here',
      content: this.content,
    },
    {
      caption: '15 Sep',
      date: new Date(2014, 9, 15),
      title: 'Event title here',
      content: this.content,
    },
    {
      caption: '01 Nov',
      date: new Date(2014, 11, 1),
      title: 'Event title here',
      content: this.content,
    },
    {
      caption: '10 Dec',
      date: new Date(2014, 12, 10),
      title: 'Event title here',
      content: this.content,
    },
    {
      caption: '29 Jan',
      date: new Date(2015, 1, 19),
      title: 'Event title here',
      content: this.content,
    },
    {
      caption: '3 Mar',
      date: new Date(2015, 3, 3),
      title: 'Event title here',
      content: this.content,
    },
  ];

  public load() {
    this.timeline = [
      {
        caption: '16 Jan',
        date: new Date(2014, 1, 16),
        selected: true,
        title: 'Horizontal Timeline',
        content: this.content,
      },
      {
        caption: '28 Feb',
        date: new Date(2014, 2, 28),
        title: 'Event title here',
        content: this.content,
      },
      {
        caption: '30 Aug',
        date: new Date(2014, 8, 30),
        title: 'Event title here',
        content: this.content,
      },
      {
        caption: '15 Sep',
        date: new Date(2014, 9, 15),
        title: 'Event title here',
        content: this.content,
      },
      {
        caption: '01 Nov',
        date: new Date(2014, 11, 1),
        title: 'Event title here',
        content: this.content,
      },
      {
        caption: '10 Dec',
        date: new Date(2014, 12, 10),
        title: 'Event title here',
        content: this.content,
      },
      {
        caption: '29 Jan',
        date: new Date(2015, 1, 19),
        title: 'Event title here',
        content: this.content,
      },
      {
        caption: '3 Mar',
        date: new Date(2015, 3, 3),
        title: 'Event title here',
        content: this.content,
      },
    ];
  }

  selectorStyle: { [key: string]: string } = {};
  isNavbarCollapsed = false;
  activeItem: any | HTMLElement;

  constructor(private renderer: Renderer2) {}
  ngOnInit() {}
  ngAfterViewInit() {
    this.selectNavItem('Home');
    setTimeout(() => {
      this.updateSelector();
    }, 500);

    // testi
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
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  }

  //testi
  testimonials = [
    {
      id: 1,
      position: 'position-1',
      active: true,
      imageUrl:
        'https://media.licdn.com/dms/image/C4D03AQFB7EKxA5cnYQ/profile-displayphoto-shrink_400_400/0/1604483727808?e=1710374400&v=beta&t=bBPQ4ISZblOpz0UI9g66vX_Kdj4RzrxuyVusLcY91Tk',
      comment:
        '"Working with [Your Name] was an absolute pleasure! Their attention to detail, creative mindset, and dedication to delivering outstanding results made a significant impact on our project. The level of professionalism and expertise they brought to the table truly set them apart. I would highly recommend [Your Name] for anyone seeking a skilled and reliable collaborator. Looking forward to future collaborations!',
      designer: 'Alagesh',
      link: 'https://manjaygupta.com',
    },
    {
      id: 2,
      position: 'position-2',
      active: false,
      imageUrl:
        'https://media.licdn.com/dms/image/D5603AQHIZqrMUHByqg/profile-displayphoto-shrink_400_400/0/1698509921490?e=1710374400&v=beta&t=RGvbEiZeBssHHGa8r2MKEb62o2KzkI_SHKYGG3VGIAU',
      comment: '"poiuytrew"',
      designer: 'Mobi',
      link: 'https://churn360.com/',
    },
    {
      id: 3,
      position: 'position-3',
      active: false,
      imageUrl:
        'https://media.licdn.com/dms/image/D5635AQHJRldCD7BGHw/profile-framedphoto-shrink_400_400/0/1700920278837?e=1705762800&v=beta&t=QdBks-1sWmf-1mk9-zHmRsz2w0S5WCpS5biOJ6n7zTY',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      designer: 'Manjay Gupta',
      link: 'https://manjaygupta.com',
    },
    {
      id: 4,
      position: 'position-4',
      active: false,
      imageUrl:
        'https://media.licdn.com/dms/image/D5603AQHAuyjBHi0ufA/profile-displayphoto-shrink_400_400/0/1695455073622?e=1710374400&v=beta&t=OOlmisUhVj6Qo2nKcND7z6cTRakHyQcJJ6Go4pNHcMk',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      designer: 'Manjay Gupta',
      link: 'https://manjaygupta.com',
    },
    {
      id: 5,
      position: 'position-5',
      active: false,
      imageUrl:
        'https://cdn.dribbble.com/users/2132253/avatars/small/1799e2c9badff08058551384763e284c.jpg?1568268299',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      designer: 'Manjay Gupta',
      link: 'https://manjaygupta.com',
    },
    {
      id: 6,
      position: 'position-6',
      active: false,
      imageUrl:
        'https://media.licdn.com/dms/image/D5603AQFe-MBCu77qYg/profile-displayphoto-shrink_400_400/0/1702137586823?e=1710979200&v=beta&t=C1ttBOtsJHh6V9O6uyIVzU20CnBprxKMqgmhGNvPkTY',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      designer: 'Yogaesh Pugazhendi',
      link: 'https://www.linkedin.com/in/mpyogaesh/',
    },
    {
      id: 7,
      position: 'position-7',
      active: false,
      imageUrl:
        'https://media.licdn.com/dms/image/D5635AQGSuYfhYDTi6A/profile-framedphoto-shrink_400_400/0/1704769544286?e=1705852800&v=beta&t=szymqjnbpYG_vTbbCoeGCogDhxsslUM7p14VQe5oGPc',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      designer: 'Yokeswaran',
      link: 'https://www.linkedin.com/in/yokeswaranmp/',
    },
    // Add more testimonial objects as needed
  ];

  toggleTestimonial(index: number): void {
    const activeIndex = this.testimonials.findIndex(
      (testimonial) => testimonial.active
    );

    if (activeIndex !== -1) {
      this.testimonials[activeIndex].active = false;
    }

    this.testimonials[index].active = true;
  }
}
