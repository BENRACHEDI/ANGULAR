  import { Component } from '@angular/core';
  import {MatDialog, MatDialogRef} from '@angular/material/dialog';
  import { Router } from '@angular/router';

  import { User } from '../../_models';
  import { UserService, AuthenticationService } from '../../_services';

  @Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
  })
  export class NavbarComponent {

    constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      public dialog: MatDialog
    ) {
      //this.currentUser = this.authenticationService.currentUserValue;
    }

    logout(): void {

      const dialogRef = this.dialog.open(LogOut, {
        maxWidth: "400px"
      });
  
      dialogRef.afterClosed().subscribe(dialogResult => {
        if(dialogResult==true){
          this.authenticationService.logout();
          //this.router.navigate(['/']);
          window.location.reload();

        }
      });
    }

  }


 /************************************** */

@Component({
  selector: 'logout',
  templateUrl: 'logout.html',
})
export class LogOut {

  constructor(
    public dialogRef: MatDialogRef<LogOut>,
    public dialog: MatDialog
  ) {}


  onConfirm(): void {
    this.dialogRef.close(true);
  }
  
  onDismiss(): void {
    this.dialogRef.close(false);
  }
} 