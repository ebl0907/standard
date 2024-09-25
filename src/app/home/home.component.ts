import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GenericService } from '../core/services/generic-service.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../core/services/auth.service';
import { User } from '../core/models/users/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    {
      provide: GenericService,
      useFactory: (httpClient: HttpClient) =>
        new GenericService(httpClient, 'user'),
      deps: [HttpClient],
    },
  ],
})
export class HomeComponent {
  constructor(public auth: AuthService, private genericService: GenericService<User>) {}
}
