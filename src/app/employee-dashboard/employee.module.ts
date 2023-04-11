import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      EmployeeRoutingModule
    ],
    // declarations: [ OrderByPipe, RatingComponent],
    // providers: [ProductService, AuthGuardService]
  })
  export class EmployeeModule { }