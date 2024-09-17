import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoService } from '../../service/ro-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  records: any[] = [];

  constructor(
    private router: Router,
    private roService: RoService,
  ) { }

  ngOnInit(): void {

    let payload = {

      pageNo: 0,
      pageSize: 0

    }

    this.roService.lasySearch(payload).subscribe((res: any) => {

      if (null != res) {
        if (res.errorCode === 200) {
          this.records = res.data;
          console.log("List: ", this.records)
        }
      }

    });
  }

  onCancel() {
    this.router.navigate(['/dashboard']);
  }
  addNewService() {
    this.router.navigate(['/roservicedetails']);
  }

}
