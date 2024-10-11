import {Component, Input} from '@angular/core';
import {Recipe} from '../models/recipe';
import {NgForOf} from '@angular/common';
import { Ingredient } from '../models/ingredient';
import { Allergen } from '../../../shared/models/allergen';

@Component({
  selector: 'app-recipe-page',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.css'
})
export class RecipePageComponent {
  @Input() recipe!: Recipe;

  public getAllergens(ingredients: Ingredient[]): string {
    if (ingredients
      .filter(ingredient => ingredient.allergen && ingredient.allergen != Allergen.NONE)
      .map(ingredient => ingredient.allergen!)
      .join(', ') != '') {
      return ingredients
        .filter(ingredient => ingredient.allergen && ingredient.allergen != Allergen.NONE)
        .map(ingredient => ingredient.allergen!)
        .join(', ');
    } else {
      return 'Aucun';
    }
  }
}
