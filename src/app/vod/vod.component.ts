import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vod',
  templateUrl: './vod.component.html',
  styleUrls: ['./vod.component.css'],
})
export class VodComponent implements OnInit {
  div1: boolean = false;
  Foods = [
    { value: 'Maths', viewValue: 'Maths' },
    { value: 'English', viewValue: 'English' },
    { value: 'Science', viewValue: 'Science' },
    { value: 'Hindi', viewValue: 'Hindi' },
  ];

  constructor() {}

  ngOnInit(): void {}
  div1Function() {
    this.div1 = true;
  }
}
