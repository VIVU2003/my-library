import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingLib } from './testing-lib';

describe('TestingLib', () => {
  let component: TestingLib;
  let fixture: ComponentFixture<TestingLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingLib],
    }).compileComponents();

    fixture = TestBed.createComponent(TestingLib);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
