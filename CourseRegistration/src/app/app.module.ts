import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './MyComponents/navigation-bar/navigation-bar.component';
import { HomePageComponent } from './MyComponents/home-page/home-page.component';
import { CoursesPageComponent } from './MyComponents/courses-page/courses-page.component';
import { DisplayCourseComponent } from './MyComponents/display-course/display-course.component';
import { DisplayDifficultyComponent } from './MyComponents/display-difficulty/display-difficulty.component';
import { DisplayLanguageComponent } from './MyComponents/display-language/display-language.component';
import { DisplayRatingComponent } from './MyComponents/display-rating/display-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomePageComponent,
    CoursesPageComponent,
    DisplayCourseComponent,
    DisplayDifficultyComponent,
    DisplayLanguageComponent,
    DisplayRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
