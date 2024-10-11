import {Diet} from '../../../shared/models/diet';
import {Ingredient} from './ingredient';
import {Step} from './step';

export class Recipe {
  constructor(
    public id: number | null,
    public name: string,
    public diet: Diet,
    public ingredients: Array<Ingredient>,
    public preparationTime: number,
    public steps: Array<Step>,
    public lipid: number,
    public carbohydrates: number,
    public protein: number,
    public calories: number
  ) {}

  public static fromJson(json: any): Recipe {
    return new Recipe(
      json.id,
      json.name,
      json.diet,
      json.ingredientDTOS ? (json.ingredientDTOS as Array<Map<string, any>>).map(ingredient => Ingredient.fromJson(ingredient)) : [],
      json.preparationTime,
      json.stepDTOS ? (json.stepDTOS as Array<Map<string, any>>).map(step => Step.fromJson(step)) : [],
      json.lipid,
      json.carbohydrates,
      json.protein,
      json.calories
    );
  }
}
