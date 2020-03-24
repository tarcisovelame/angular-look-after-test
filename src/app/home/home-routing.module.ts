import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescricaoComponent } from './descricao/descricao.component';

const homeRoutes: Routes = [
  { path: 'home', component: DescricaoComponent },
  { path: 'acesso/:tipo', component: DescricaoComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule]
})

export class HomeRoutingModule {}