import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
})
export class SubjectsComponent implements OnInit {
  list = [
    {
      class: 'grid1',
      src: '/assets/images/icons/4.png',
      backrgound: 'linear-gradient(141.55deg, #d0ee5a 11.11%, #1b4700 92.43%);',
    },
    {
      class: 'grid2',
      src: '/assets/images/icons/6.png',
    },
    {
      class: 'grid3',
      src: '/assets/images/icons/7.png',
    },
    {
      class: 'grid4',
      src: '/assets/images/icons/5.png',
    },
    {
      class: 'grid5',
      src: '/assets/images/icons/1.png',
    },
    {
      class: 'grid6',
      src: '/assets/images/icons/2.png',
    },
    {
      class: 'grid7',
      src: '/assets/images/icons/3.png',
    },
    {
      class: 'grid8',
      src: '/assets/images/icons/9.png',
    },
    {
      class: 'grid9',
      src: '/assets/images/icons/8.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
