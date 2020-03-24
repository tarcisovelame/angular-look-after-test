import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { CarouselHomeService } from './carousel-home.service';
import { environment } from 'src/environments/environment';
import { Produto } from './produto';

@Component({
  selector: 'carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: {
      interval: 2000,
      noPause: false,
      showIndicators: true,
      itemsPerSlide: 4,
      indicatorsByChunk: true
    } }
  ]

})
export class CarouselHomeComponent implements OnInit {

  produtos: Produto[];
  apiUrl = environment.apiUrl;
  activeSlideIndex = 0;



  
  constructor(
    private service: CarouselHomeService
  ) { }

  ngOnInit(): void {
    this.service.list().subscribe(dados => this.produtos = dados);
  }


  
}
