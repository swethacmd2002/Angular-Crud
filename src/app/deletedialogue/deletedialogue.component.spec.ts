import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedialogueComponent } from './deletedialogue.component';

describe('DeletedialogueComponent', () => {
  let component: DeletedialogueComponent;
  let fixture: ComponentFixture<DeletedialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
