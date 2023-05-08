import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesearchComponent } from './createsearch.component';

describe('CreatesearchComponent', () => {
  let component: CreatesearchComponent;
  let fixture: ComponentFixture<CreatesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatesearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
