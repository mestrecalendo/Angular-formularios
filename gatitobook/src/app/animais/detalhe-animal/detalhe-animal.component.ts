import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../animais';
import { AnimaisService } from '../animais.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css'],
})
export class DetalheAnimalComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animalService: AnimaisService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params['id'];
    this.animal$ = this.animalService.buscarPorId(this.animalId);
  }
}
