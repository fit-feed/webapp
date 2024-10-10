import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../models/recipe';
import {RecipeService} from '../recipe.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-recipes-show',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './recipes-show.component.html',
  styleUrl: './recipes-show.component.css'
})
export class RecipesShowComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}
  recipes: Array<Recipe> = [];
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
}
