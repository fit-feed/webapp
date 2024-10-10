import {Diet} from './diet';
import {Allergen} from './allergen';

export class Profile {
  constructor(
    public id: number | null,
    public name: string,
    public age: number,
    public gender: Gender,
    public weight: number,
    public height: number,
    public diet: Diet,
    public goal: Goal,
    public allergies: Array<Allergen>,
    public activity: Activity
  ) {}
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum Goal {
  WEIGHT_GAIN = "WEIGHT_GAIN",
  WEIGHT_LOSS = "WEIGHT_LOSS",
  WEIGHT_MAINTAINANCE = "WEIGHT_MAINTAINANCE",
}

export enum Activity {
  SEDENTARY = "SEDENTARY",
  RATHER_ACTIVE = "RATHER_ACTIVE",
  ACTIVE = "ACTIVE",
  VERY_ACTIVE = "VERY_ACTIVE",
}
