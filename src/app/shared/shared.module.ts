import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [FontAwesomeComponent, ErrorMsgComponent, ModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FontAwesomeComponent,
    ErrorMsgComponent,
    ModalComponent
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class SharedModule { }
