import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

import { StoreRouting } from './store.routing';

import { StoreComponent } from './store.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [ThemeModule, 
    StoreRouting,
    Ng2SmartTableModule],
  declarations: [StoreComponent],
  entryComponents: [],
  providers: []
})
export class StoreModule {}