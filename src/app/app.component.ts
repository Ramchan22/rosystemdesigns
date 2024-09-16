import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserManagementService } from './service/usermanagement-service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[UserManagementService]
})
export class AppComponent {
  title = 'rosystems';
}
