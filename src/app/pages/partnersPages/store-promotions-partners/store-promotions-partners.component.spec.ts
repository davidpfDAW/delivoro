import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePromotionsPartnersComponent } from './store-promotions-partners.component';

describe('StorePromotionsPartnersComponent', () => {
  let component: StorePromotionsPartnersComponent;
  let fixture: ComponentFixture<StorePromotionsPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorePromotionsPartnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorePromotionsPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
