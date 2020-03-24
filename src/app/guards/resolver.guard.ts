import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../users/user';
import { LoginService } from '../home/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverGuard implements Resolve<User> {

  constructor(
    private service: LoginService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {

    // Condição para trabalhar tb quando tivermo a criação, além da edição
    if(route.params && route.params['id']) {
      return this.service.loadByID(route.params['id']);
    }

    return of({
      id: null,
      nome: null,
      email: null,
      telefone: null,
      senha: null
    })

  }

}
