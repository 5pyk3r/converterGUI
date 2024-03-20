import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterAPIServiceService {

  constructor(public httpCLient: HttpClient) { }

  public sendFile(): Observable<any>{

    return this.httpCLient.post<any>('localhost:8080/conv/upload-file', null);
  }
}
