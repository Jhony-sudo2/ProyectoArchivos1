import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrocComponent } from './registroc.component';

describe('RegistrocComponent', () => {
  let component: RegistrocComponent;
  let fixture: ComponentFixture<RegistrocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrocComponent]
    });
    fixture = TestBed.createComponent(RegistrocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
