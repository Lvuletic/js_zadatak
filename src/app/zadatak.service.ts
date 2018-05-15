import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Response, Http }   from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Zadatak }    from './zadatak';
import { RequestOptions, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class ZadatakService {

  constructor(private http: Http) { }

  apiUrl = window.location.protocol + '//' + window.location.hostname + ':3000' + '/api';

  public getAllZadaci(): Observable<Zadatak[]> {
    return this.http
      .get(this.apiUrl + '/zadatak')
      .map(response => {
        const zadaci = response.json();
        return zadaci.map((zadatak) => new Zadatak(zadatak));
      })
      .catch(this.handleError);
  }

  public createZadatak(zadatak: Zadatak) {
    let options = new RequestOptions();
    options.headers = new Headers();
    options.headers.append('Content-Type', 'application/json');
    return this.http
      .post(this.apiUrl + '/zadatak', zadatak, options)
      .map(response => {
        return new Zadatak(response.json());
      })
      .catch(this.handleError);
  }

  public getZadatakById(zadatakId: string) {
    return this.http
      .get(this.apiUrl + '/zadatak/' + zadatakId)
      .map(response => {
        return new Zadatak(response.json());
      })
      .catch(this.handleError);
  }

  public updateZadatak(zadatak: Zadatak) {
    let options = new RequestOptions();
    options.headers = new Headers();
    options.headers.append('Content-Type', 'application/json');
    return this.http
      .put(this.apiUrl + '/zadatak' + '/' + zadatak._id, zadatak)
      .map(response => {
        return new Zadatak(response.json());
      })
      .catch(this.handleError);
  }

  public deleteZadatakById(zadatakId: string) {
    return this.http
      .delete(this.apiUrl + '/zadatak/' + zadatakId)
      .subscribe((response: any) => {},
        error => this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ZadatakService::handleError', error);
    return Observable.throw(error);
  }
}
