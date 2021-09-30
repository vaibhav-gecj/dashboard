import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  footerlist = [
    {
      name: 'Home',
      src: '/assets/footericon/home.png',
    },
    {
      name: 'Live Class',
      src: '/assets/footericon/live.png',
    },
    {
      name: 'Network',
      src: '/assets/footericon/contact.png',
    },
    {
      name: 'Settings',
      src: '/assets/footericon/setting.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
