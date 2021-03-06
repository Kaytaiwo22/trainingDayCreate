/**
 * The Component Module
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  entryComponents: [NavbarComponent],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class NavbarModule {}
