import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsearchComponent } from './adminsearch.component';

describe('AdminsearchComponent', () => {
  let component: AdminsearchComponent;
  let fixture: ComponentFixture<AdminsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
