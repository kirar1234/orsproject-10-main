import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JasperReportComponent } from './jasper-report.component';

describe('JasperReportComponent', () => {
  let component: JasperReportComponent;
  let fixture: ComponentFixture<JasperReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JasperReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JasperReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
