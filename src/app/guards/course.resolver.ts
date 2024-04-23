import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Course } from '../courses/model/course';
import { CoursesService } from '../courses/services/courses.service';

export const courseResolver: ResolveFn<Observable<Course>> = (route, state,  service: CoursesService = inject(CoursesService)) => {

  if (route.params?.['id']){
    return service.loadById(route.params['id']);
  }
  return of({_id: '', name: '', category: ''});
};