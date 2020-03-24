import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalNovoComponent } from '../modal-novo/modal-novo.component';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { UsersFormService } from './users-form.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent extends BaseFormComponent implements OnInit {

  public maskTelefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(
    private fb: FormBuilder,
    private modalNovo: ModalNovoComponent,
    private modalService: ModalService,
    private service: UsersFormService
  ) { super(); }

  ngOnInit(): void {
    let hoje = formatDate(new Date(), 'dd/MM/yyyy', 'en');
    this.formulario = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      telefone: [null, [Validators.required, Validators.pattern("[(][0-9]{2}[)] [0-9]{5}-[0-9]{4}$")]], 
      senha: [null, Validators.required],
      registro: [hoje]
    });

  }

  onClose() {
    this.modalNovo.onClose();
  }

  handleError() {
    this.modalService.showAlertDanger('Erro ao tentar criar novo usuário. Tente mais tarde');
  }

  success() {
    let nome = this.formulario.controls['nome'].value;
    this.modalService.showAlertSuccess(`Usuário <strong>${nome}</strong> criado com sucesso`);
  }


  submit() {
    this.service.save(this.formulario.value).subscribe(
      success => {
        this.onClose();
        this.success();
      },
      error => { 
        this.onClose();
        this.handleError();
      },
      () => console.log('request completo')
    );
  }


}
