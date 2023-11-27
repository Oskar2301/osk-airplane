import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  PROD_API = '';
  LOCAL_API = 'http://localhost:8000';

  getApiUrl(): string {
    return this.isProduction() ? this.PROD_API : this.LOCAL_API;
  }

  private isProduction(): boolean {
    return false;
  }
}
