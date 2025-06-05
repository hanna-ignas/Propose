import { Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { SuccessComponent } from './success/success.component';

export const routes: Routes = [
  { path: '', redirectTo: '/page1', pathMatch: 'full' },
  { path: 'page1', component: IntroductionComponent },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: 'success', component: SuccessComponent },
  { path: '**', redirectTo: '/page1' }
];
