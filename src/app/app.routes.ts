import { Routes } from '@angular/router';

import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { InvestigatorForm } from './investigator-form/investigator-form';
import { Case } from './case/case';
import { Case2 } from './case2/case2';
import { Case3 } from './case3/case3';
export const routes: Routes = [
  { path: '', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'investigator', component: InvestigatorForm },
    { path: 'case', component: Case },
    { path: 'case2', component: Case2 },
    { path: 'case3', component: Case3 }
];