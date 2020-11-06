import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewBookComponent } from './create-new-book.component';

describe('CreateNewBookComponent', () => {
  let component: CreateNewBookComponent;
  let fixture: ComponentFixture<CreateNewBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
