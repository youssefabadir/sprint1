import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AuthRoutingModule,
    ThemeModule,
    FormsModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
