import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndedCallComponent } from './ended-call.component';

describe('EndedCallComponent', () => {
  let component: EndedCallComponent;
  let fixture: ComponentFixture<EndedCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndedCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndedCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
