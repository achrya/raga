import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Student } from '../models/student';
import { StudentDto } from '../models/student-dto';

@Injectable({
  providedIn: 'root'
})
export class StudentApi {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = '/api/students'; // Adjust this URL based on your backend

  getAllStudents(): Observable<Student[]> {
    return this.http.get<StudentDto[]>(this.baseUrl).pipe(
      map(dtos => dtos.map(dto => Student.fromDto(dto)))
    );
  }

  getStudentById(id: string): Observable<Student> {
    return this.http.get<StudentDto>(`${this.baseUrl}/${id}`).pipe(
      map(dto => Student.fromDto(dto))
    );
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<StudentDto>(this.baseUrl, student.toDto()).pipe(
      map(dto => Student.fromDto(dto))
    );
  }

  updateStudent(id: string, student: Student): Observable<Student> {
    return this.http.put<StudentDto>(`${this.baseUrl}/${id}`, student.toDto()).pipe(
      map(dto => Student.fromDto(dto))
    );
  }

  deleteStudent(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  searchStudents(query: string): Observable<Student[]> {
    return this.http.get<StudentDto[]>(`${this.baseUrl}/search?q=${encodeURIComponent(query)}`).pipe(
      map(dtos => dtos.map(dto => Student.fromDto(dto)))
    );
  }
}
