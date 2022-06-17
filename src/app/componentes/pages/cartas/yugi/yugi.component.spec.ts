import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YugiComponent } from './yugi.component';

describe('YugiComponent', () => {
  let component: YugiComponent;
  let fixture: ComponentFixture<YugiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YugiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YugiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
