import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetabletListComponent } from './timetablet-list.component';

describe('TimetabletListComponent', () => {
  let component: TimetabletListComponent;
  let fixture: ComponentFixture<TimetabletListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimetabletListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimetabletListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
