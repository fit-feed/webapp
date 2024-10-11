import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../models/recipe';
import {RecipeService} from '../recipe.service';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Profile} from '../../../shared/models/profile';
import {RecipePageComponent} from '../recipe-page/recipe-page.component';

@Component({
  selector: 'app-recipes-show',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    RecipePageComponent
  ],
  templateUrl: './recipes-show.component.html',
  styleUrl: './recipes-show.component.css'
})
export class RecipesShowComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}
  recipes: Array<Recipe> = [];
  selectedRecipe?: Recipe;

  isLoading = false;
  @Input() mealsCount!: any;
  @Input() profileId!: number;

  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    this.recipeService.generateByProfile(this.profileId, this.mealsCount).subscribe(
      {
        next: (recipes: Array<Recipe>) => {
          this.recipes = recipes;
          this.isLoading = false;
        },
        error: (error: any) => {
          console.error('Error occurred:', error);
          this.isLoading = false;
        }
      });
  }

  selectRecipe(recipeId: number): void {
    this.selectedRecipe = this.recipes.find(recipe => recipe.id === recipeId);
  }
}
