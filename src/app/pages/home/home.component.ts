import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Router } from '@angular/router';

import { User } from '../../_models';
import { UserService, AuthenticationService } from '../../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
    title = "Home";
    currentUser!: User;
    users: any[] = [];
  
    constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private userService: UserService
    ) {
      this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
      this.loadAllUsers();
    }


    deleteUser(id: number) {
      this.userService
        .delete(id)
        .pipe(first())
        .subscribe(() => this.loadAllUsers());
    }
  
    private loadAllUsers() {
       this.userService
        .getAll()
        .pipe(first())
        .subscribe((users) => (this.users = users));
    }
  
    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
    }
}
