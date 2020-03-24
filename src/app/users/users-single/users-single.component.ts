import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-single',
  templateUrl: './users-single.component.html',
  styleUrls: ['./users-single.component.scss']
})
export class UsersSingleComponent implements OnInit {

  usuario = this.route.snapshot.data['usuario'];

  constructor(
    private route: ActivatedRoute 
  ) { }

  ngOnInit(): void {

  }

}
