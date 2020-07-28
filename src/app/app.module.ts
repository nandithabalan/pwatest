import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRouteModule} from './app-route.module';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {AccordionModule} from 'primeng/accordion';
import {MatTabsModule} from '@angular/material/tabs';
import { CompanyHomeComponent } from './company-home/company-home.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CompanyHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    TabMenuModule,
    AccordionModule,
    MatTabsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  exports: [AppRouteModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
