// src/app/core/logger.service.ts
import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable()
export class LoggerService {
  log(message: string): void {
    console.log(message);
  }
}
