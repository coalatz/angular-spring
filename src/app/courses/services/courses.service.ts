import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }
  list(): Course[] {
    return [
       {_id: "1", name:"React", category:"Front-End"},
       {_id: "2", name:"Java", category:"Back-End"}
      ]
  }
}
