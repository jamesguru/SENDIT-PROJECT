import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdminGuard } from './Guards/admin.guard';
import { UserGuard } from './Guards/user.guard';

const routes: Routes = [

{path:'', component:HomeComponent},
{path:'about', component:AboutComponent},

{ path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

{ path: 'parcels',canActivate:[UserGuard], loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },

{ path: 'admin',canActivate:[AdminGuard], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

{ path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },

{ path: '**', component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
