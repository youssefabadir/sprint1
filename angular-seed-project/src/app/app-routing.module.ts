import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { AuthParentComponent } from './auth-parent/auth-parent.component';
import { AuthGuard } from './@guards/auth.guard';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '',
    component: ParentComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'store',
        loadChildren: './store/store.module#StoreModule'
      },
     ]
  },
  { path: '',
    component: AuthParentComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: './auth/auth.module#AuthModule'
      },
      {
        path:'error',
        component: ErrorComponent
      },
    ]
  },
  
  {
    path: '**',
    redirectTo: 'error'
  },
 
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' },
];


const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
