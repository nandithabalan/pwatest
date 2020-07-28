import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CompanyHomeComponent} from './company-home/company-home.component';


export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [{
      path: 'home',
      component: CompanyHomeComponent
    }]
  },
  {path: '**', redirectTo: '/404'}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false
    })
  ],
  exports: [RouterModule]
})
export class AppRouteModule {
}
