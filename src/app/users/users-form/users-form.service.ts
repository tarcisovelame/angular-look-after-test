import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersFormService extends CrudService<User> {

  constructor(
    protected http: HttpClient
  ) { super(http, `${environment.SERVER}/users`); }
}
