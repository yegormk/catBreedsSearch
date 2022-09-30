import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'

import {Observable} from 'rxjs';

import {CatImage} from '../store/cats.state';


@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private urlApi = 'https://api.thecatapi.com/v1'

  constructor(private http: HttpClient) { }

  getBreed(breed: string, quantity: string): Observable<CatImage[]> {

    return (breed !== 'all') ?
      this.http.get<CatImage[]>
      (`${this.urlApi}/images/search?breed_ids=${breed}&limit=${quantity}`) :
      this.http.get<CatImage[]>
      (`${this.urlApi}/images/search?limit=${quantity}`);
  }

  getBreeds(): Observable<CatImage[]> {
    return this.http.get<CatImage[]>(`${this.urlApi}/breeds`);
  }
}
