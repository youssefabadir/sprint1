import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { Product } from '../@objects/product';

@Injectable()
export class ProductService {

  constructor(public http: Http) { }

  getProducts(){
    return this.http.get(environment.apiUrl + '/product/getProducts').map(res => res.json());
  }

  createProduct(product){
   return this.http.post(environment.apiUrl + '/product/createProduct', product).map(res => res.json());
  }

}