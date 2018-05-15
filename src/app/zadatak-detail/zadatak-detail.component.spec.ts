import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZadatakDetailComponent } from './zadatak-detail.component';

describe('ZadatakDetailComponent', () => {
  let component: ZadatakDetailComponent;
  let fixture: ComponentFixture<ZadatakDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZadatakDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZadatakDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
