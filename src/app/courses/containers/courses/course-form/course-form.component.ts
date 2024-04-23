import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { CoursesService } from '../../../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../../model/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent implements OnInit {

  form = this.formBuilder.group({
    _id:  new FormControl('',{ nonNullable: true}),
    name: new FormControl('',{ nonNullable: true}),
    category: new FormControl('',{ nonNullable: true})
  });

    constructor(private formBuilder: FormBuilder, 
      private service: CoursesService,
      private snackBar: MatSnackBar, 
      private location: Location,
      private route: ActivatedRoute) { 
      
    }

    ngOnInit(): void {
        const course: Course = this.route.snapshot.data['course'];
        this.form.setValue({
          _id: course._id,
          name: course.name,
          category: course.category
        })
    }

    onSubmit() {
      this.service.save(this.form.value).subscribe(data => this.onSuccess(),
      error => this.onErro());
    }

    onCancel() {
      this.location.back();
    }

    private onSuccess() {
      this.snackBar.open('Curso adicionado com sucesso!','',{duration: 2000});
      this.onCancel();
    }

    private onErro() {
      this.snackBar.open('Error ao adicionar curso.','',{duration: 2000})
    }
}
