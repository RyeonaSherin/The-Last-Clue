import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvestigatorForm } from './investigator-form';

describe('InvestigatorForm', () => {
  let component: InvestigatorForm;
  let fixture: ComponentFixture<InvestigatorForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestigatorForm],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestigatorForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
