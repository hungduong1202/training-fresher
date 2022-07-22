import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNgContentComponent } from './demo-ng-content.component';

describe('DemoNgContentComponent', () => {
  let component: DemoNgContentComponent;
  let fixture: ComponentFixture<DemoNgContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoNgContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
