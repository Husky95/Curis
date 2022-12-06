import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {ProgressBarModule} from 'primeng/progressbar';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {MenubarModule} from 'primeng/menubar';
import {ToastModule} from 'primeng/toast';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RequestInterceptor } from './request.interceptor';
import {SelectButtonModule} from 'primeng/selectbutton';
import {FileUploadModule} from 'primeng/fileupload';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {StyleClassModule} from 'primeng/styleclass';
import {TableModule} from 'primeng/table';
import { LandingComponent } from './landing/landing.component';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    ProgressBarModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    MenubarModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    SelectButtonModule,
    FileUploadModule,
    ToggleButtonModule,
    StyleClassModule,
    TableModule,
  ],
  providers: [{provide : HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
