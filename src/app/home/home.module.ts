import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule  } from '@angular/forms';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

import { DescricaoComponent } from './descricao/descricao.component';
import { LoginComponent } from './login/login.component';
import { UsersModule } from '../users/users.module';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { CarouselHomeComponent } from './carousel-home/carousel-home.component';


@NgModule({
  declarations: [DescricaoComponent, LoginComponent, ModalLoginComponent, CarouselHomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    HomeRoutingModule,
    UsersModule,
    
    CarouselModule.forRoot()
  ],
  exports: [
    DescricaoComponent
  ]
})
export class HomeModule { }
