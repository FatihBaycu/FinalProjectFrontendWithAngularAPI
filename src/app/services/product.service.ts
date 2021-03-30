import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResposeModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';
 
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl="https://localhost:44345/api/";

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResposeModel<Product>>{
    let newPath=this.apiUrl+"products/getall";
  return this.httpClient.get<ListResposeModel<Product>>(newPath)
  }

  getProductsByCategoryId(categoryId:number):Observable<ListResposeModel<Product>>{
    let newPath=this.apiUrl+"products/getbycategoryid?categoryId="+categoryId;
    return this.httpClient.get<ListResposeModel<Product>>(newPath)
    }

    addProduct(product:Product):Observable<ResponseModel>{
      let newPath=this.apiUrl+"products/add";
      return this.httpClient.post<ResponseModel>(newPath,product, );
    }
}
