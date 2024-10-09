import {Step} from './step';

export interface Ingredients {
  id: number;
  name: string;
  diet: Diet;
  preparationTime: number;
  steps: Array<Step>;
  lipid: number;
  protein: number;
  carbohydrates: number;
  calories: number;
}
