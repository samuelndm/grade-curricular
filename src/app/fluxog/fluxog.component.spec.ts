import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxogComponent } from './fluxog.component';

describe('FluxogComponent', () => {
  let component: FluxogComponent;
  let fixture: ComponentFixture<FluxogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
