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
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
     /* _id: {
        title: 'Product ID',
        type: 'string',
        value:false
      },*/
      name: {
        title: 'Name',
        type: 'string',
      },
      price: {
        title: 'Price',
        type: 'number',
      },
      /*createdAt: {
        title: 'Created At',
        type: 'date',
      },
      updatedAt: {
        title: 'Updated At',
        type: 'date',
      },*/
      category: {
        title: 'Category',
        type: 'string',
      },

    },
  };

  onDelete(event): void {
      this.productService.deleteProduct(event.data._id).subscribe((response) => {
        event.confirm.resolve();
        this.ngOnInit();
      });      
  }

  onEdit(event): void {
    this.productService.editProduct(event.data._id, event.newData).subscribe((response) => {
      event.confirm.resolve();
      this.ngOnInit();
    });      
}

  onCreate(event): void{
    this.productService.createProduct(event.newData).subscribe((response) => {
      event.confirm.resolve(event.newData);
      this.ngOnInit();
    });
  }

}