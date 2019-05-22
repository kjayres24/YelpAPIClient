import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YelpsearchComponent } from './yelpsearch.component';

describe('YelpsearchComponent', () => {
  let component: YelpsearchComponent;
  let fixture: ComponentFixture<YelpsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YelpsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YelpsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
