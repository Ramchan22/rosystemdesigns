import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserManagementService } from '../../service/usermanagement-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.css'
})
export class UpdateuserComponent {
  
  records: any[] = [];

  constructor(
    private userManagementService: UserManagementService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userManagementService.getAllUserDetail().subscribe((res: any) => {

      if (null != res) {
        if (res.errorCode === 200) {
          this.records = res.data;
          console.log("List: ", this.records)
        }
      }

    });
  }


  viewRecord(id: number): void {
    console.log('View record with ID:', id);
    // Implement your view logic here
  }

  editRecord(id: number): void {
    console.log('Edit record with ID:', id);
    // Implement your edit logic here
  }

  onCancel() {
    this.router.navigate(['/dashboard']);
  }

}
