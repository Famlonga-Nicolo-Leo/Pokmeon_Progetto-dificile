import { Component, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';


@Component({
  selector: 'app-spec',
  imports: [],
  templateUrl: './spec.html',
  styleUrl: './spec.css',
})
export class Spec {
  @Input() pokemon!: Pokemon;
}
