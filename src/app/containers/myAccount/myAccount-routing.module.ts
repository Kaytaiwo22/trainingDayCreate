import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './myAccount.component';
import {VerifiedAsLoggedInService} from "../../../verified-as-logged-in.service";

const routes: Routes = [
  {
    path: '',
    component: MyAccountComponent,
    canActivate: [VerifiedAsLoggedInService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAccountRoutingModule {}
