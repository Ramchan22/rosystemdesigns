import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http'; // <-- import HttpClientModule and provider
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserManagementService } from './service/usermanagement-service';
import { RoService } from './service/ro-service';
import { CommonService } from './service/common-service';
import { LocalStorageService } from './service/localstorage-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    UserManagementService,
    RoService,
    CommonService,
    LocalStorageService
  ]
};
