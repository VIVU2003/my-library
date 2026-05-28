import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userDetails } from '../Models/details';

@Injectable({
  providedIn: 'root'
})
export class GetdetailsService {

  private url = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getDetails() {
    return this.http.get<userDetails>(this.url);
  }
}