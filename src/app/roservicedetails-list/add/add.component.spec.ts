import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoservicedetailsComponent } from './add.component';

describe('RoservicedetailsComponent', () => {
  let component: RoservicedetailsComponent;
  let fixture: ComponentFixture<RoservicedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoservicedetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoservicedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
