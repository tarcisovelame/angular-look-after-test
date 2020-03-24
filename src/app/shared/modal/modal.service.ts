import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal.component';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private modalService: BsModalService
  ) { }

  modalLogin() {
    const bsModalRef: BsModalRef = this.modalService.show(ModalComponent);
    bsModalRef.content.modal = 'login';
  }

  private showAlert(message: string, type: AlertTypes, dismissTimeout?: number) {
    const bsModalRef: BsModalRef = this.modalService.show(ModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;
    bsModalRef.content.modal = 'alert';

    if(dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }
  }

  showAlertDanger(message: string, dismissTimeout?: number) {
    this.showAlert(message, AlertTypes.DANGER, dismissTimeout);
  }
  showAlertSuccess(message: string, dismissTimeout?: number) {
    this.showAlert(message, AlertTypes.SUCCESS, dismissTimeout);
  } 
}
