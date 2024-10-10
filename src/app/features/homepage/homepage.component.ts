import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {Profile, Gender, Goal, Activity} from '../../shared/models/profile';
import {Diet} from '../../shared/models/diet';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {FormsModule, NgForm} from '@angular/forms';
import {RecipesShowComponent} from '../recipes/recipes-show/recipes-show.component';



@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgClass,
    NgIf,
    RecipesShowComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  protected readonly AuthService = AuthService;
  protected readonly Goal = Goal;

  profiles: Array<Profile> = [];
  selectedProfile?: Profile;
  showRecipes: boolean = false
  numberMeals?: number;


  ngOnInit(): void {
    if (AuthService.check()) {
      this.profiles = [
        {
          id: 2,
          name: "Alex",
          age: 24,
          gender: Gender.MALE,
          weight: 73,
          height: 181,
          diet: Diet.OMNIVORE,
          goal: Goal.WEIGHT_GAIN,
          allergies: [],
          activity: Activity.RATHER_ACTIVE,
        },
        {
          id: 3,
          name: "Julie",
          age: 24,
          gender: Gender.FEMALE,
          weight: 54,
          height: 165,
          diet: Diet.OMNIVORE,
          goal: Goal.WEIGHT_MAINTAINANCE,
          allergies: [],
          activity: Activity.RATHER_ACTIVE,
        }
      ];
    }
  }

  selectProfile(profileId: number): void {
    this.selectedProfile = this.profiles.find(profile => profile.id === profileId);
  }

  generateMeals(form: NgForm) {
    console.log(this.selectedProfile !== null);
    console.log(form.value.numberMeals !== null);
    console.log(form.value.numberMeals > 0);
    if (this.selectedProfile != null && form.value.numberMeals != null && form.value.numberMeals > 0) {      this.numberMeals = form.value.numberMeals;
      this.showRecipes = true;
    } else {
      alert('Veuillez sélectionner un profil et un nombre de repas');
    }
  }
}
