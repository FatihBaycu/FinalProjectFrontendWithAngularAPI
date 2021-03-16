import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category/category';
import { ListResposeModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl="https://localhost:44345/api/Categories/getall";

  constructor(private httpClient:HttpClient) { }
  getCategories():Observable<ListResposeModel<Category>>{
  return this.httpClient.get<ListResposeModel<Category>>(this.apiUrl)
  }
}