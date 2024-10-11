import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private env: { [key: string]: string } = {};

  constructor() {
    this.loadEnvVariables();
  }

  private loadEnvVariables() {
    this.env['API_URL'] = process.env['API_URL'] || '';
  }

  get apiUrl(): string {
    return this.env['API_URL'];
  }
}
