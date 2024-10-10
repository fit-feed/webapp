import { Allergen } from '../../../shared/models/allergen';

export class Ingredient {
  constructor(
    public id: number | null,
    public name: string,
    public quantity: number,
    public quantityType: QuantityType,
    public allergen: Allergen | null
  ) {}

  public static fromJson(json: Map<string, any>): Ingredient {
    return new Ingredient(
      json.get('id'),
      json.get('name'),
      json.get('quantity'),
      json.get('quantityType'),
      json.get('allergen')
    );
  }
}

export enum QuantityType {
  GRAM = "GRAM",
  PART = "PART",
  MILLILITER = "MILLILITER",
  COFFEE_SPOON = "COFFEE_SPOON",
  SOUP_SPOON = "SOUP_SPOON",
}
