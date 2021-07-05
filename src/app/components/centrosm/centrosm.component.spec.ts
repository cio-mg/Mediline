import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosmComponent } from './centrosm.component';

describe('CentrosmComponent', () => {
  let component: CentrosmComponent;
  let fixture: ComponentFixture<CentrosmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentrosmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrosmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
