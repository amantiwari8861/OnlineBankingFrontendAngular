import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      UserRoutingModule
    ],
    // declarations: [ OrderByPipe, RatingComponent],
    // providers: [ProductService, AuthGuardService]
  })
  export class UserModule { }