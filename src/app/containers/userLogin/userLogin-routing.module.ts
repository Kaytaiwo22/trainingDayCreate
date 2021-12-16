import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './userLogin.component';
import {VerifiedAsLoggedOutService} from "../../../verified-as-logged-out.service";

const routes: Routes = [
  {
    path: '',
    component: UserLoginComponent,
    canActivate: [VerifiedAsLoggedOutService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserLoginRoutingModule {}
