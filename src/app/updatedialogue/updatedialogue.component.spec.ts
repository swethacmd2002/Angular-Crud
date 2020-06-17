import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedialogueComponent } from './updatedialogue.component';

describe('UpdatedialogueComponent', () => {
  let component: UpdatedialogueComponent;
  let fixture: ComponentFixture<UpdatedialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
