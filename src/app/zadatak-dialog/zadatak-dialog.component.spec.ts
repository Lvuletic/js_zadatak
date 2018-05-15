import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZadatakDialogComponent } from './zadatak-dialog.component';

describe('ZadatakDialogComponent', () => {
  let component: ZadatakDialogComponent;
  let fixture: ComponentFixture<ZadatakDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZadatakDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZadatakDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
