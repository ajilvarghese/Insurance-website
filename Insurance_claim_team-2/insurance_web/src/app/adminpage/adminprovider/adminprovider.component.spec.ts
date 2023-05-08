import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminproviderComponent } from './adminprovider.component';

describe('AdminproviderComponent', () => {
  let component: AdminproviderComponent;
  let fixture: ComponentFixture<AdminproviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminproviderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
