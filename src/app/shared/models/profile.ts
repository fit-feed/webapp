export interface Profile {
  id: number;
  name: string;
  age: number;
  gender: Gender;
  weight: number;
  height: number;
  diet: Diet;
  goal: Goal;
  allergies: Array<Allergen>;
  activity: Activity;
}

enum Gender {
  MALE,
  FEMALE
}

enum Goal {
  WEIGHT_GAIN,
  WEIGHT_LOSS,
  WEIGHT_MAINTAINANCE
}

enum Activity {
  SEDENTARY,
  RATHER_ACTIVE,
  ACTIVE,
  VERY_ACTIVE,
}
