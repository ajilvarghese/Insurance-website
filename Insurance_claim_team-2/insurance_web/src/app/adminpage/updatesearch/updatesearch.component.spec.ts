import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesearchComponent } from './updatesearch.component';

describe('UpdatesearchComponent', () => {
  let component: UpdatesearchComponent;
  let fixture: ComponentFixture<UpdatesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
