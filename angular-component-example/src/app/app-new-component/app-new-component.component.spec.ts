import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNewComponentComponent } from './app-new-component.component';

describe('AppNewComponentComponent', () => {
  let component: AppNewComponentComponent;
  let fixture: ComponentFixture<AppNewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNewComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
