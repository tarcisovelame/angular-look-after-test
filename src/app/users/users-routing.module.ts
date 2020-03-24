import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersFormComponent } from './users-form/users-form.component';
import { UsersSingleComponent } from './users-single/users-single.component';
import { AuthGuard } from '../guards/auth.guard';
import { UserResolverGuard } from '../guards/resolver.guard';

const usersRoutes: Routes = [
  { path: 'users/cadastrar', component: UsersFormComponent },
  { path: 'users/single/:id', component: UsersSingleComponent, canActivate: [AuthGuard], resolve: { usuario: UserResolverGuard }  }
]

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [RouterModule]
})

export class UsersRoutingModule {}