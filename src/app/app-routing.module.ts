import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { PartagedocumentComponent } from './pages/partagedocument/partagedocument.component';
import { DocumentComponent } from './pages/document/document.component';
import { ClassementComponent } from './pages/classement/classement.component';
import { WorkflowComponent } from './pages/workflow/workflow.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { AuthGuard } from './_helpers/auth.guard';
import { LoginComponent } from './Authen/login/login.component';
import { FpasswordComponent } from './Authen/fpassword/fpassword.component';
import { RpasswordComponent } from './Authen/rpassword/rpassword.component';
import { UsersComponent } from './pages/users/users.component';
import { GroupeComponent } from './pages/groupe/groupe.component';

const routes: Routes = [
        { path: 'dashboard', component: DashboardComponent,
          children: [
            { path: 'home', component: HomeComponent},
            { path: 'partage', component: PartagedocumentComponent},
            { path: 'document', component: DocumentComponent},
            { path: 'classement', component: ClassementComponent},
            { path: 'workflow', component: WorkflowComponent},
            { path: 'adminitration', component: AdministrationComponent},
            { path: 'users', component: UsersComponent},
            { path: 'groupe', component: GroupeComponent},
            { path: '**', redirectTo: 'home' },
          ], canActivate: [AuthGuard]},
        { path: 'login', component: LoginComponent},
        { path: 'forget-password', component: FpasswordComponent},
        { path: 'recover-password', component: RpasswordComponent},
       // { path: '', redirectTo: 'dashboard'},

          // otherwise redirect to login
        { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
