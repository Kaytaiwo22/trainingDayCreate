import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import {VerifiedAsLoggedInService} from "../verified-as-logged-in.service";

const routes: Routes = [
  // {
  //   path: 'articles/:slug',
  //   loadChildren: () => import('./containers/pages/pages.module').then(mod => mod.PagesModule),

  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./containers/userLogin/userLogin.module').then(mod => mod.UserLoginModule),
  // },
  // {
  //   path: 'confirmation',
  //   redirectTo: '/account'
  // },
  // {
  //   path: ':slug',
  //   loadChildren: () => import('./containers/pages/pages.module').then(mod => mod.PagesModule)
  // },
  {
    path: "",
    loadChildren: () =>
      import("./pages/home/home.module").then((mod) => mod.HomeModule),
  },
  { path: "**", redirectTo: "/", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: "enabled" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
