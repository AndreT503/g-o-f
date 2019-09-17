import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloydComponentComponent } from './floyd-component.component';

describe('FloydComponentComponent', () => {
  let component: FloydComponentComponent;
  let fixture: ComponentFixture<FloydComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloydComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloydComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
