import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreMenuPartnersComponent } from './store-menu-partners.component';

describe('StoreMenuPartnersComponent', () => {
  let component: StoreMenuPartnersComponent;
  let fixture: ComponentFixture<StoreMenuPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreMenuPartnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreMenuPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
