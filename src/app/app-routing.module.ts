import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ChildComponent } from './main-layout/child/child.component';

const appRoutes: Routes =[
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'main-dashboard', component: MainLayoutComponent, children: [
    { path: 'main-dashboard/child', component: ChildComponent}
  ]},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile-detail', component: ProfileDetailComponent},
  {path: '**', component: FileNotFoundComponent}

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      // {enableTracing: true} //Debuging Purpose
    )
        
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
