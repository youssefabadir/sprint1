import { NgModule } from '@angular/core';

import { StoreRoutingModule } from './store.routing';
import { StoreComponent } from './store.component';
import {ThemeModule} from "../@theme/theme.module";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {StoreService} from "../@services/store.service";

@NgModule({
    imports: [
        ThemeModule,
        StoreRoutingModule,
        Ng2SmartTableModule
    ],
    declarations: [StoreComponent],
    providers: [StoreService]
})
export class StoreModule { }
