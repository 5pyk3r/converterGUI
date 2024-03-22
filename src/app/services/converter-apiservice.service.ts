import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterAPIServiceService {

  constructor(public httpCLient: HttpClient) { }

  public sendFile(formData: FormData): Observable<any>{

    return this.httpCLient.post<any>('http://localhost:8080/conv/upload-file', formData);
  }
}
