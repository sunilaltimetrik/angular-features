import {MatNativeDateModule} from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { LoginComponent } from './login/login.component';
import{ DemoMaterialModule} from './material-module';
import { from } from 'rxjs';
import { HeaderService } from './header.service';
import { SummeryPipe } from './summery.pipe';
import { CamelCasePipe } from './login/camel-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ProfileDetailComponent,
    FileNotFoundComponent,
    LoginComponent,
    SummeryPipe,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, ReactiveFormsModule, HttpClientModule, DemoMaterialModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);