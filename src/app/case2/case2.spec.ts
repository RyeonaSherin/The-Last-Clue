import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Case2 } from './case2';

describe('Case2', () => {
  let component: Case2;
  let fixture: ComponentFixture<Case2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Case2],
    }).compileComponents();

    fixture = TestBed.createComponent(Case2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
