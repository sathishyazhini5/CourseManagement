import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterdetailsComponent } from './centerdetails.component';

describe('CenterdetailsComponent', () => {
  let component: CenterdetailsComponent;
  let fixture: ComponentFixture<CenterdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CenterdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CenterdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
