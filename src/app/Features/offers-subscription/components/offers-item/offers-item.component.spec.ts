import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersItemComponent } from './offers-item.component';

describe('OffersItemComponent', () => {
  let component: OffersItemComponent;
  let fixture: ComponentFixture<OffersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
