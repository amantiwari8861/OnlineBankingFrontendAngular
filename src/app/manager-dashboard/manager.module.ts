import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManagerRoutingModule } from './manager-routing.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ManagerRoutingModule
    ],
    // declarations: [ OrderByPipe, RatingComponent],
    // providers: [ProductService, AuthGuardService]
  })
  export class ManagerModule { }