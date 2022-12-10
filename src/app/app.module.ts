import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AddComplaintComponent } from './add-complaint/add-complaint.component';
import { ViewAllComplaintsComponent } from './view-all-complaints/view-all-complaints.component';
import { ViewUserComplaintsComponent } from './view-user-complaints/view-user-complaints.component';

let myRoutes:Routes = [
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"userreg",
    component:UserRegComponent
  },
  {
    path:"userprofile",
    component:UserProfileComponent
  },
  {
    path:"admindashboard",
    component:AdminDashboardComponent
  },
  {
    path:"addcomplaint",
    component:AddComplaintComponent
  },
  {
    path:"viewallcomplaints",
    component:ViewAllComplaintsComponent
  },
  {
    path:"viewusercomplaints",
    component:ViewUserComplaintsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeNavbarComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegComponent,
    UserProfileComponent,
    UserNavbarComponent,
    AdminDashboardComponent,
    AdminNavbarComponent,
    AddComplaintComponent,
    ViewAllComplaintsComponent,
    ViewUserComplaintsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
