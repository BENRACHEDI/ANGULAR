import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// material
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { FooterComponent } from './component/footer/footer.component';
import { PartagedocumentComponent } from './pages/partagedocument/partagedocument.component';
import { DocumentComponent } from './pages/document/document.component';
import { ClassementComponent } from './pages/classement/classement.component';
import { WorkflowComponent } from './pages/workflow/workflow.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { CsidebarComponent } from './component/csidebar/csidebar.component';
import { AlertComponent } from './component/alert/alert.component';
import { LoginComponent } from './Authen/login/login.component';
import { FpasswordComponent } from './Authen/fpassword/fpassword.component';
import { RpasswordComponent } from './Authen/rpassword/rpassword.component';
import { UsersComponent } from './pages/users/users.component';
import { GroupeComponent } from './pages/groupe/groupe.component';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    PartagedocumentComponent,
    DocumentComponent,
    ClassementComponent,
    WorkflowComponent,
    AdministrationComponent,
    CsidebarComponent,
    AlertComponent,
    FpasswordComponent,
    RpasswordComponent,
    UsersComponent,
    GroupeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
