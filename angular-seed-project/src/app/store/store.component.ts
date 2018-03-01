import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from "ng2-smart-table";
import {StoreService} from "../@services/store.service";

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

    items: LocalDataSource = new LocalDataSource();
    
    constructor(public storeService: StoreService) { 
        
    }

    ngOnInit() {

        this.storeService.getProduct().subscribe( (response) => {
            this.items.load(response.data);
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
                title: 'Product Name',
                type: 'string',
            },
            price: {
                title: 'Price',
                type: 'number',
            },
            createdAt: {
                title: 'Created At',
                type: Date
            },
            updatedAt: {
                title: 'Updated At',
                type: Date
            }
        },
    };

}
