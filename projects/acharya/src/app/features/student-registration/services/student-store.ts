import { Injectable, inject, signal, computed } from '@angular/core';
import { Student } from '../models/student';
import { StudentApi } from './student-api';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class StudentStore {
  private readonly studentApi = inject(StudentApi);

  // State signals
  private readonly _students = signal<Student[]>([]);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);
  private readonly _selectedStudent = signal<Student | null>(null);

  // Computed signals
  readonly students = this._students.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();
  readonly selectedStudent = this._selectedStudent.asReadonly();

  readonly studentsCount = computed(() => this._students().length);
  readonly hasStudents = computed(() => this._students().length > 0);

  // Actions
  async loadStudents(): Promise<void> {
    this._loading.set(true);
    this._error.set(null);
    
    try {
      const students = await this.studentApi.getAllStudents().toPromise();
      this._students.set(students || []);
    } catch (error) {
      this._error.set(error instanceof Error ? error.message : 'Failed to load students');
    } finally {
      this._loading.set(false);
    }
  }

  async createStudent(student: Student): Promise<void> {
    this._loading.set(true);
    this._error.set(null);
    
    try {
      const newStudent = await this.studentApi.createStudent(student).toPromise();
      if (newStudent) {
        this._students.update(students => [...students, newStudent]);
      }
    } catch (error) {
      this._error.set(error instanceof Error ? error.message : 'Failed to create student');
    } finally {
      this._loading.set(false);
    }
  }

  async updateStudent(id: string, student: Student): Promise<void> {
    this._loading.set(true);
    this._error.set(null);
    
    try {
      const updatedStudent = await this.studentApi.updateStudent(id, student).toPromise();
      if (updatedStudent) {
        this._students.update(students => 
          students.map(s => s.id === id ? updatedStudent : s)
        );
        if (this._selectedStudent()?.id === id) {
          this._selectedStudent.set(updatedStudent);
        }
      }
    } catch (error) {
      this._error.set(error instanceof Error ? error.message : 'Failed to update student');
    } finally {
      this._loading.set(false);
    }
  }

  async deleteStudent(id: string): Promise<void> {
    this._loading.set(true);
    this._error.set(null);
    
    try {
      await this.studentApi.deleteStudent(id).toPromise();
      this._students.update(students => students.filter(s => s.id !== id));
      if (this._selectedStudent()?.id === id) {
        this._selectedStudent.set(null);
      }
    } catch (error) {
      this._error.set(error instanceof Error ? error.message : 'Failed to delete student');
    } finally {
      this._loading.set(false);
    }
  }

  selectStudent(student: Student | null): void {
    this._selectedStudent.set(student);
  }

  clearError(): void {
    this._error.set(null);
  }

  // Utility methods
  getStudentById(id: string): Student | undefined {
    return this._students().find(s => s.id === id);
  }

  searchStudents(query: string): Student[] {
    if (!query.trim()) return this._students();
    
    const lowerQuery = query.toLowerCase();
    return this._students().filter(student => 
      student.firstName.toLowerCase().includes(lowerQuery) ||
      student.lastName.toLowerCase().includes(lowerQuery) ||
      student.email.toLowerCase().includes(lowerQuery) ||
      student.schoolName.toLowerCase().includes(lowerQuery)
    );
  }
}
