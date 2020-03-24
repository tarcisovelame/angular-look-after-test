import { HttpClient } from '@angular/common/http';
import { delay, tap, take } from 'rxjs/operators';

// Esse <T> é um generics
export class CrudService<T> {

  constructor(
    protected http: HttpClient,
    private API_URL
  ) {}

  list() {
    return this.http.get<T[]>(this.API_URL)
      .pipe(
        delay(500),
        tap(console.log)
      )
  }

  loadByID(id) {
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }

  getByEmail(email) {
    return this.http.get<T>(`${this.API_URL}/?email=${email}`).pipe(take(1));
  }

  private create(registro: T) {
    return this.http.post(this.API_URL, registro).pipe(take(1));
  }

  private update(registro: T) {
    return this.http.put(`${this.API_URL}/${registro['id']}`, registro).pipe(take(1));
  }

  save(registro: T) {
    // Conferindo se já existe ID pq ele irá determinar se é CREATE ou UPDATE
    if(registro['id']) {
      return this.update(registro);
    }
    return this.create(registro);
  }

  remove(id) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }
}
