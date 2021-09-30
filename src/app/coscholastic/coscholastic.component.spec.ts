import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoscholasticComponent } from './coscholastic.component';

describe('CoscholasticComponent', () => {
  let component: CoscholasticComponent;
  let fixture: ComponentFixture<CoscholasticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoscholasticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoscholasticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
