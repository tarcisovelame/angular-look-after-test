import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/users/user';

@Injectable({
  providedIn: 'root'
})
export class CarouselHomeService extends CrudService<User> {

  constructor(
    protected http: HttpClient
  ) { super(http, `${environment.SERVER}/produtos`); }
}
