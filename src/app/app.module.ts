import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { FileUploadComponent } from '../components/file-upload/file-upload.component';
import { EscherComponent } from '../components/escher/escher.component';
import { EscherStatisticsComponent } from '../components/escher-statistics/escher-statistics.component';
import { KeysPipe } from '../pipes/keys.pipe'; // import our pipe here

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FileUploadComponent,
    EscherComponent,
    EscherStatisticsComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
