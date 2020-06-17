import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedialogueComponent } from './createdialogue.component';

describe('CreatedialogueComponent', () => {
  let component: CreatedialogueComponent;
  let fixture: ComponentFixture<CreatedialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
