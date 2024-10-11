import { Allergen } from '../../../shared/models/allergen';

export class Ingredient {
  constructor(
    public id: number | null,
    public name: string,
    public quantity: number,
    public quantityType: QuantityType,
    public allergen: Allergen | null
  ) {}

  public static fromJson(json: any): Ingredient {
    return new Ingredient(
      json.id,
      json.name,
      json.quantity,
      json.quantityType,
      json.allergen
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
