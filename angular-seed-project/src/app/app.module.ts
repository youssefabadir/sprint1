import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from './@theme/theme.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductService } from './@services/product.service';
import { ParentComponent } from './parent/parent.component';
import { AuthComponent } from './auth/auth.component';
import { AuthParentComponent } from './auth-parent/auth-parent.component';
import { AuthService } from './@services/auth.service';
import { AuthGuard } from './@guards/auth.guard';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ErrorComponent } from './error/error.component';
import { NbThemeModule } from '@nebular/theme';

@NgModule({
  declarations: [AppComponent, ParentComponent, AuthParentComponent, ErrorComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/',}, AuthGuard, CookieService,AuthService]
})
export class AppModule {}