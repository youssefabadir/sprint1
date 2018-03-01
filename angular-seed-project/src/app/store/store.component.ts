import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ProductService } from '../@services/product.service';
import { Product } from '../@objects/product';

@Component({
  selector: 'app-product',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  
  products: LocalDataSource = new LocalDataSource();

  constructor(public productService: ProductService) { }

  ngOnInit() {

    this.productService.getProducts().subscribe((response) => {
      this.products.load(response.data);
      console.log(this.products);
    });


  }

  settings = {
    /*
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },*/
    /*delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },*/

    actions: false,
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      price: {
        title: 'Price',
        type: 'number',
      },
    },
  };

 // onDeleteConfirm(event): void {
   // if (window.confirm('Are you sure you want to delete?')) {
     // event.confirm.resolve();
    //} else {
      //event.confirm.reject();
    //}
  //}

 // onCreate(event): void{
   // this.productService.createProduct(event.newData).subscribe((response) => {
     // event.confirm.resolve(event.newData);
      //this.ngOnInit();
    //});
 // }

}