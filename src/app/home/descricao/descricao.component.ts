import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.component.html',
  styleUrls: ['./descricao.component.scss']
})
export class DescricaoComponent implements OnInit {

  tipo: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.tipo = this.route.snapshot.paramMap.get("tipo");
  }


}
