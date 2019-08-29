import { BrowserModule } from '@angular/platform-browser';
import { DemoMaterialModule} from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

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
import { HeaderService } from './header.service';
import { SummeryPipe } from './summery.pipe';
import { CamelCasePipe } from './login/camel-case.pipe';
import { from } from 'rxjs';
import { TreeCheckboxComponent } from './tree-checkbox/tree-checkbox.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ChildComponent } from './main-layout/child/child.component';
import { InputOuputComponent } from './input-ouput/input-ouput.component';
import { InputOutputPracticeComponent } from './input-output-practice/input-output-practice.component';
import { BuiltInDirectivesComponent } from './built-in-directives/built-in-directives.component';
import { MyAccordianComponent } from './my-accordian/my-accordian.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { PracticeTemplateDrivenFormComponent } from './practice-template-driven-form/practice-template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


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
    CamelCasePipe,
    TreeCheckboxComponent,
    MainLayoutComponent,
    ChildComponent,
    InputOuputComponent,
    InputOutputPracticeComponent,
    BuiltInDirectivesComponent,
    MyAccordianComponent,
    TemplateDrivenFormComponent,
    PracticeTemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
    DemoMaterialModule, 
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