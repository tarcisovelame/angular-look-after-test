import { Component, OnInit } from '@angular/core';
import { ModalNovoService } from 'src/app/users/modal-novo/modal-novo.service';
import { ModalLoginService } from '../modal-login/modal-login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private modalLoginService: ModalLoginService,
    private modalNovoService: ModalNovoService
  ) { }

  ngOnInit(): void {
  }

  modalNovo() {
    this.modalNovoService.showModal();
  }

  modalLogin() {
    this.modalLoginService.modalLogin();
  }

}
