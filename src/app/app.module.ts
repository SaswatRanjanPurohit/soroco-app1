import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicantComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule, ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
