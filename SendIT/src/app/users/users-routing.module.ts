import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParcelsComponent } from './parcels/parcels.component';


const routes: Routes = [{ path: '', component: ParcelsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
