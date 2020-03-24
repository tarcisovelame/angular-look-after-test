import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { UsersFormComponent } from './users-form/users-form.component';
import { UsersRoutingModule } from './users-routing.module';
import { ModalNovoComponent } from './modal-novo/modal-novo.component';
import { UsersSingleComponent } from './users-single/users-single.component';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [UsersFormComponent, ModalNovoComponent, UsersSingleComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    TextMaskModule
  ],
  exports: [
    UsersFormComponent
  ]
})
export class UsersModule { }
