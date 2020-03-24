import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { FormBuilder } from '@angular/forms';
import { AuthService } from './auth.service';
import { User } from 'src/app/users/user';


@Component({
  selector: 'modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent extends BaseFormComponent implements OnInit {

  // private usuario: User = new User();
  public loginError: boolean;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private authService: AuthService
    ) { super(); }

  ngOnInit() {
    this.formulario = this.fb.group({
      email: [null],
      senha: [null]
    });

    this.authService.getValue().subscribe((value) => {
      this.loginError = value;
    });

  } 

  onClose() {
    this.bsModalRef.hide();
  }

  submit() {
    this.authService.autenticarLogin(this.formulario.value);

    if(!this.loginError) this.onClose();
  }

}
