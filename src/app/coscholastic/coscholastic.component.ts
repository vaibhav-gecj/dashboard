import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coscholastic',
  templateUrl: './coscholastic.component.html',
  styleUrls: ['./coscholastic.component.css'],
})
export class CoscholasticComponent implements OnInit {
  colist = [
    {
      text: 'Co-scholastic activities are counducted for meeting the students necessitites by covering a wide range of their talents aswell as capabilities.The activities raise interests in the students and give a similar oppurtunity to every student for participating.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
