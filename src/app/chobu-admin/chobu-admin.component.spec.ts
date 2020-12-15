import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChobuAdminComponent } from './chobu-admin.component';

describe('ChobuAdminComponent', () => {
  let component: ChobuAdminComponent;
  let fixture: ComponentFixture<ChobuAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChobuAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChobuAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
