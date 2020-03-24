import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../users/user';
import { LoginService } from '../login/login.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModalService } from 'src/app/shared/modal/modal.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuario;
  public usuarioAutenticado: boolean = false;
  private loginError: BehaviorSubject<boolean>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private modalService: ModalService
    ) { this.loginError = new BehaviorSubject<boolean>(false); }

  setValue(newValue): void {
    this.loginError.next(newValue);
  }
  
  getValue(): Observable<boolean> {
    return this.loginError.asObservable();
  }

  handleError() {
    this.modalService.showAlertDanger('Erro ao efetuar login. Tente mais tarde');
  }

  autenticarLogin(usuario: User) {

    this.loginService.getByEmail(usuario.email).subscribe(
      success => {
        
        this.usuario = success;

        if(usuario.email === this.usuario[0].email && usuario.senha === this.usuario[0].senha) {
          console.log('logou');
          this.usuarioAutenticado = true;

          this.router.navigate([`/users/single/${this.usuario[0].id}`]);
          this.setValue(false);
        }
        else {
          this.usuarioAutenticado = false;
          this.setValue(true);
        }
        
      },
      error => { 
        console.log('Error: ', error);
        this.handleError();
      } 
    );
    
  }


  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }


}