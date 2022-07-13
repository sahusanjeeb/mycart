import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { NgToastModule } from 'ng-angular-popup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgToastModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { constructor(){ console.log("app module");}}
