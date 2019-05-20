import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottombarComponent } from './bottombar.component';

describe('BottombarComponent', () => {
  let component: BottombarComponent;
  let fixture: ComponentFixture<BottombarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottombarComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottombarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
