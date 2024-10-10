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

  public static fromJson(json: Map<string, any>): Recipe {
    return new Recipe(
      json.get('id'),
      json.get('name'),
      json.get('diet'),
      json.get('ingredients') ? (json.get('steps') as Array<Map<string, any>>).map(ingredient => Ingredient.fromJson(ingredient)) : [],
      json.get('preparationTime'),
      json.get('steps') ? (json.get('steps') as Array<Map<string, any>>).map(step => Step.fromJson(step)) : [],
      json.get('lipid'),
      json.get('carbohydrates'),
      json.get('protein'),
      json.get('calories')
    );
  }
}
