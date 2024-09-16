import { Component, NgModule } from '@angular/core';
import { Route, Router, RouterModule, Routes } from '@angular/router';
import { RomachinedetailsComponent } from '../romachinedetails/romachinedetails.component';
import { EmployeedetailsComponent } from '../employeedetails/employeedetails.component';
import { RoservicedetailsComponent } from '../roservicedetails-list/add/add.component';
import { UserManagementService } from '../service/usermanagement-service';
import { LocalStorageService } from '../service/localstorage-service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {

  title = "Welcome to RAM AQUA TECH..."
  quotes1 = "Welcome to Pure Waters – Where Every Drop Counts!"
  quotes2 = "Refresh Your Life with Pure, Clean Water – Discover Our Range of RO Purifiers!"
  quotes3 = "Your Health, Our Priority – Experience the Purity of Fresh Water Today!"
  quotes4 = "Welcome to Crystal Clear Choices – Perfect Purity for Your Home!"
  quotes5 = "Stay Hydrated, Stay Healthy – Explore Our Collection of Advanced RO Water Purifiers!"
  quotes6 = "Pure Water, Pure Life – Elevate Your Home with Our Cutting-Edge Purifiers!"
  quotes7 = "Welcome to a Healthier Tomorrow – Let’s Begin with Pure Water!"

  constructor(
    private router: Router,
    private userManagementService: UserManagementService,
    private localStorageService: LocalStorageService,
  ) { }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  logout() {

    this.userManagementService.logout().subscribe((res: any) => {

      if (res != null) {
        if (res.errorCode == "200") {
          this.localStorageService.clear();
          this.router.navigate(['/login']);
        } else {
          console.log(res.userDisplayMesg);
        }
      } else {
        console.log('Something went wrong!');
      }

    })
    // this.router.navigate(['/login']);

  }

}
