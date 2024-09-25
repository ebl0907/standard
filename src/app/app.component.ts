import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './core/services/generic-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
