import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluxDataComponent } from './influx-data.component';

describe('InfluxDataComponent', () => {
  let component: InfluxDataComponent;
  let fixture: ComponentFixture<InfluxDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfluxDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfluxDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
