import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './MyComponents/courses-page/courses-page.component';
import { DisplayDifficultyComponent } from './MyComponents/display-difficulty/display-difficulty.component';
import { DisplayLanguageComponent } from './MyComponents/display-language/display-language.component';
import { DisplayRatingComponent } from './MyComponents/display-rating/display-rating.component';
import { HomePageComponent } from './MyComponents/home-page/home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'courses', component: CoursesPageComponent },
  { path: 'diff', component: DisplayDifficultyComponent },
  { path: 'lang', component: DisplayLanguageComponent },
  { path: 'rating', component: DisplayRatingComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
