import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalLoginComponent } from './modal-login.component';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class ModalLoginService {

  constructor(
    private modalService: BsModalService
  ) { }

  private showAlert(message: string, type: AlertTypes, dismissTimeout?: number) {
    const bsModalRef: BsModalRef = this.modalService.show(ModalLoginComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if(dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }
  }

  modalLogin() {
    const bsModalRef: BsModalRef = this.modalService.show(ModalLoginComponent);
    bsModalRef.content.modal = 'login';
  }

  modalClose() {
    console.log('modal close pelo moda-login.service');
  }

  showAlertDanger(message: string, dismissTimeout?: number) {
    this.showAlert(message, AlertTypes.DANGER, dismissTimeout);
  }
  showAlertSuccess(message: string, dismissTimeout?: number) {
    this.showAlert(message, AlertTypes.SUCCESS, dismissTimeout);
  }
}
