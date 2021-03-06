import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core' ;
import { Course } from './course';

@Component({
selector: 'app-course-list',
templateUrl: './course-list.Component.html'
})


export class CourseListComponent implements OnInit{
    courses: Course[]= [];

    ngOnInit(): void {
        this.courses = [
            {
                id:1,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'kps-8796',
                duration: 120,
                rating: 4.5,
                releaseDate: 'december, 2, 2020',
            },
            {
                id:2,
                name: 'Angular: HTTP',
                imageUrl: '/assets/images/http.png',
                price: 45.99,
                code: 'kps-1094',
                duration: 80,
                rating: 4,
                releaseDate: 'december, 4, 2020',
            }
        ]


    }


}