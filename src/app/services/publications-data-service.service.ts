import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PublicationsDataServiceService {
  PUBLICATIONS_URL = 'http://localhost:3000/publications';

  constructor(private _http: HttpClient) {}

  getPublications(): Observable<any> {
    return this._http.get(this.PUBLICATIONS_URL);
  }
}
