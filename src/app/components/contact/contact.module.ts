import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ContactComponent} from "./contact.component";
import {HeroModule} from "../hero/hero.module";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}


/**
 * The Module
 */
@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, ContactRoutingModule, HeroModule],
  declarations: [ContactComponent],
  providers: []
})
export class ContactModule {}
