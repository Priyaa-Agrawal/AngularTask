import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { showData } from './sampleData';

@Injectable({
  providedIn: 'root'
})
export class ServiceApi1Service {
   private _url: string="https://reqres.in/api/users?page=2";
  constructor(private http : HttpClient) { }
  getUser1(): Observable<{data : showData[]}>{
    return this.http.get<{data : showData[]}>(this._url);
    }
}
