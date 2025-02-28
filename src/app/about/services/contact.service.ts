import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}/api/contact`; // ✅ Uses dynamic API URL

  constructor(private http: HttpClient) {}

  sendContact(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  getContacts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
