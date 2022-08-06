import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Course';

@Component({
  selector: 'app-display-difficulty',
  templateUrl: './display-difficulty.component.html',
  styleUrls: ['./display-difficulty.component.css']
})
export class DisplayDifficultyComponent implements OnInit {

  title = 'CourseRegistration';
  courses: Course[];
  
  constructor() {
    this.courses = [{
      name: "HTML",
      instructor: "Intructor 1",
      level: "Beginner",
      lang: "English",
      rating: 5,
      desc: "HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it!"
    },
    {
      name: "CSS",
      instructor: "Intructor 1",
      level: "Beginner",
      lang: "English",
      rating: 5,
      desc: "CSS stands for Cascading Style Sheets · CSS describes how HTML elements are to be displayed on screen, paper, or in other media "
    },
    {
      name: "JavaScript",
      instructor: "Intructor 1",
      level: "Intermediate",
      lang: "English",
      rating: 5,
      desc: "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web"
    },
    {
      name: "Model View Controller(MVC)",
      instructor: "Intructor 1",
      level: "Advanced",
      lang: "Urdu",
      rating: 3,
      desc: "The Model-View-Controller (MVC) framework is an architectural pattern that separates an application into three main logical components Model, View, and Controller."
    },
    {
      name: "Angular",
      instructor: "Intructor 1",
      level: "Advanced",
      lang: "Urdu",
      rating: 4,
      desc: "Angular is a platform for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces"
    },
    {
      name: "React",
      instructor: "Intructor 1",
      level: "Intermediate",
      lang: "French",
      rating: 3,
      desc: "React is an open-source front-end JavaScript library for building user interfaces or UI components"
    }
  ]
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
