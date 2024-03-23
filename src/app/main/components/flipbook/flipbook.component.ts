import { Book, FlipbookService, PageType } from '@labsforge/flipbook';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flipbook',
  templateUrl: './flipbook.component.html',
  styleUrls: ['./flipbook.component.scss'],
})
export class FlipbookComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  book: Book = {
    width: 1190,
    height: 800,
    zoom: 1,
    pages: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1611316185995-9624c94487d1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  };

  myBook: Book = {
    width: 1190,
    height: 800,
    zoom: 1,
    cover: {
      front: {
        imageUrl:
          'https://images.unsplash.com/photo-1601314167099-232775b3d6fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhkJTIwcGhvdG9zfGVufDB8fDB8fHww',
      },
      back: {
        imageUrl:
          'https://images.unsplash.com/photo-1601314167099-232775b3d6fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhkJTIwcGhvdG9zfGVufDB8fDB8fHww',
      },
    },
    pages: [
      {
        // start guard section
        imageUrl:
          'https://images.unsplash.com/photo-1601314167099-232775b3d6fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhkJTIwcGhvdG9zfGVufDB8fDB8fHww',
        backgroundColor: '#41473A', // don't use if want to see front-cover inverted image
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1601314167099-232775b3d6fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhkJTIwcGhvdG9zfGVufDB8fDB8fHww',
      }, // end guard section

      {
        imageUrl: 'assets/demo/guard.jpg',
        backgroundColor: '#41473A', // don't use if want to see back-cover inverted image
      }, // end guard section
    ],
    pageWidth: 585,
    pageHeight: 780,
    startPageType: PageType.Double,
    endPageType: PageType.Double,
  };
}
