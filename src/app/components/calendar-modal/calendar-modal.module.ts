/**
 * The Component Module
 */
import {NgModule} from "@angular/core";
import {CalendarModalComponent} from "./calendar-modal.component";
import {NavigationModule} from "../navigation/navigation.module";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";


@NgModule({
    imports: [NavigationModule, CommonModule, RouterModule, ReactiveFormsModule,FormsModule],
  entryComponents: [CalendarModalComponent],
  declarations: [CalendarModalComponent],
  exports: [CalendarModalComponent]
})
export class CalendarModalModule {}
