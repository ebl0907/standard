import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Response } from '../interface/response';
import { Observable } from 'rxjs';
@Injectable()
export class GenericService<T> {
  entity = '';
  url = '';
  readonly headers = new HttpHeaders({
    'Content-Type': 'application/vnd.api+json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT,PATCH,HEAD',
    'Cache-Control': 'no-cache',
    'Access-Allow-Control-Origin': '*',
  });

  constructor(private httpClient: HttpClient, @Inject('entityName') private entityName: string) {
    this.url = `${environment.apiHostUrl}api/${this.entityName}`;
  }

  getAll(): Observable<Response<T[]>> {
    return this.httpClient.get<Response<T[]>>(this.url, {
      headers: this.headers,
    });
  }

  getById(id: number): Observable<Response<T>> {
    return this.httpClient.get<Response<T>>(`${this.url}/${id}`, {
      headers: this.headers,
    });
  }

  delete(id: number): Observable<Response<T>> {
    return this.httpClient.delete<Response<T>>(`${this.url}/${id}`, {
      headers: this.headers,
    });
  }

  create(entity: T): Observable<Response<T>> {
    return this.httpClient.post<Response<T>>(this.url, entity, {
      headers: this.headers,
    });
  }

  update(entity: T): Observable<Response<T>> {
    return this.httpClient.put<Response<T>>(this.url, entity, {
      headers: this.headers,
    });
  }
}
