import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {catImage} from '../store/cats.state';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  constructor(private http: HttpClient) { }

  private urlApi = 'https://api.thecatapi.com/v1';

  getBreed(breed: string, quantity: string): Observable<catImage[]> {
    return (breed !== 'all') ?
      this.http.get<catImage[]>
      (`${this.urlApi}/images/search?breed_ids=${breed}&limit=${quantity}`) :
      this.http.get<catImage[]>
      (`${this.urlApi}/images/search?limit=${quantity}`);
  }

  getBreeds(): Observable<catImage[]> {
    return this.http.get<catImage[]>(`${this.urlApi}/breeds`);
  }
}
