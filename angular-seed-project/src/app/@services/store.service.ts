import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { environment } from "../../environments/environment.prod";
import { Product } from "../@objects/product";
//import {data} from "../@objects/product";

@Injectable()
export class StoreService {

  constructor(public http: Http) { }

  getProduct() {
    return this.http.get(environment.apiUrl + 'product/getProducts').map(res => res.json());
  }

}
