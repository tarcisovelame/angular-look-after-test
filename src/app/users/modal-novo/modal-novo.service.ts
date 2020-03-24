import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalNovoComponent } from './modal-novo.component';

@Injectable({
  providedIn: 'root'
})
export class ModalNovoService {

  constructor(
    private modalService: BsModalService
  ) { }

  showModal() {
    const bsModalRef: BsModalRef = this.modalService.show(ModalNovoComponent);
  }
}
