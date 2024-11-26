import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:5206/api/Carts';

  constructor(private http: HttpClient) {}
  getCarts():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
    
  }

}
