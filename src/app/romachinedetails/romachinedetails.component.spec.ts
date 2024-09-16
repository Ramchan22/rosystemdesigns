import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomachinedetailsComponent } from './romachinedetails.component';

describe('RomachinedetailsComponent', () => {
  let component: RomachinedetailsComponent;
  let fixture: ComponentFixture<RomachinedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RomachinedetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RomachinedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
