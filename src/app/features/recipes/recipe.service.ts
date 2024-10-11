import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {catchError, map, Observable, tap, throwError} from 'rxjs';
import {Recipe} from './models/recipe';
import { ConfigService } from '../../core/services/config.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private http: HttpClient, private configService: ConfigService) {}

  public generateByProfile(profileId: number, numberRecipies: number): Observable<Array<Recipe>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(`${this.configService.apiUrl}recipes/${profileId}/${numberRecipies}`, { headers }).pipe(
      map((response: any)=> response.map((json: Map<string, any>) => Recipe.fromJson(json))),
      tap(() => console.log('Recipies fetched successfully')),
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(() => new Error(error));
      })
    );
  }
}
