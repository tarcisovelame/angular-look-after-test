import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'modal-novo',
  templateUrl: './modal-novo.component.html',
  styleUrls: ['./modal-novo.component.scss']
})
export class ModalNovoComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  onClose() {
    this.bsModalRef.hide();
  }

}
