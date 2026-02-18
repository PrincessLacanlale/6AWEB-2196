import { Routes } from '@angular/router';
import { TemplateDemo } from './template-demo/template-demo';
import { ReactiveDemo } from './reactive-demo/reactive-demo';
import { CustomForm } from './custom-form/custom-form'; // Import the new component

export const routes: Routes = [
  { path: 'template-driven', component: TemplateDemo },
  { path: 'reactive-demo', component: ReactiveDemo },
  { path: 'custom-form', component: CustomForm }, // Add this route
  { path: '', redirectTo: '/template-driven', pathMatch: 'full' }
];
