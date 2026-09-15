import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Case3 } from './case3';

describe('Case3', () => {
  let component: Case3;
  let fixture: ComponentFixture<Case3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Case3],
    }).compileComponents();

    fixture = TestBed.createComponent(Case3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
