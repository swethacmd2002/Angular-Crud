import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaddialogueComponent } from './readdialogue.component';

describe('ReaddialogueComponent', () => {
  let component: ReaddialogueComponent;
  let fixture: ComponentFixture<ReaddialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaddialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaddialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
