import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { StoreService } from '../@services/store.service';  
import { Product } from '../@objects/product';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  
  products: LocalDataSource = new LocalDataSource();

  constructor(public productService: StoreService) { }

  ngOnInit() {

    this.productService.getProducts().subscribe((response) => {
      this.products.load(response.data);
      console.log(this.products);
    });

  }

  settings = {
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
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      price: {
        title: 'Price',
        type: 'number',
      },
      createdAt:{
        title:'CreatedAt',
        type: 'Date',
      }
    },
  };

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreate(event): void{
    this.productService.createProduct(event.newData).subscribe((response) => {
      event.confirm.resolve(event.newData);
      //this.ngOnInit();
    });
  }

}
