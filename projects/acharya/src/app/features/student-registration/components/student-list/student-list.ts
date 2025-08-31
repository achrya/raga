import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Student } from '../../models/student';
import { StudentStore } from '../../services/student-store';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './student-list.html',
  styleUrl: './student-list.scss'
})
export class StudentList implements OnInit {
  private readonly router = inject(Router);
  private readonly studentStore = inject(StudentStore);

  // Search and filter signals
  private readonly _searchQuery = signal('');
  private readonly _selectedGrade = signal<string>('');

  // Computed signals
  readonly students = this.studentStore.students;
  readonly loading = this.studentStore.loading;
  readonly error = this.studentStore.error;
  readonly studentsCount = this.studentStore.studentsCount;
  readonly hasStudents = this.studentStore.hasStudents;

  readonly searchQuery = this._searchQuery.asReadonly();
  readonly selectedGrade = this._selectedGrade.asReadonly();

  // Filtered students based on search and grade
  readonly filteredStudents = computed(() => {
    let filtered = this.students();
    
    // Apply search filter
    if (this._searchQuery()) {
      filtered = this.studentStore.searchStudents(this._searchQuery());
    }
    
    // Apply grade filter
    if (this._selectedGrade()) {
      filtered = filtered.filter(student => student.grade === this._selectedGrade());
    }
    
    return filtered;
  });

  // Grade options for filtering
  readonly gradeOptions = [
    'Pre-K', 'Kindergarten', '1st Grade', '2nd Grade', '3rd Grade',
    '4th Grade', '5th Grade', '6th Grade', '7th Grade', '8th Grade',
    '9th Grade', '10th Grade', '11th Grade', '12th Grade'
  ];

  ngOnInit(): void {
    this.loadStudents();
  }

  async loadStudents(): Promise<void> {
    await this.studentStore.loadStudents();
  }

  onSearchChange(query: string): void {
    this._searchQuery.set(query);
  }

  onGradeFilterChange(grade: string): void {
    this._selectedGrade.set(grade);
  }

  clearFilters(): void {
    this._searchQuery.set('');
    this._selectedGrade.set('');
  }

  viewStudent(student: Student): void {
    this.studentStore.selectStudent(student);
    this.router.navigate(['/students', student.id]);
  }

  editStudent(student: Student): void {
    this.studentStore.selectStudent(student);
    this.router.navigate(['/students', student.id, 'edit']);
  }

  async deleteStudent(student: Student): Promise<void> {
    if (confirm(`Are you sure you want to delete ${student.fullName}?`)) {
      await this.studentStore.deleteStudent(student.id);
    }
  }

  addNewStudent(): void {
    this.router.navigate(['/students/register']);
  }

  getGradeColor(grade: string): string {
    const gradeColors: { [key: string]: string } = {
      'Pre-K': 'primary',
      'Kindergarten': 'success',
      '1st Grade': 'info',
      '2nd Grade': 'warning',
      '3rd Grade': 'danger',
      '4th Grade': 'primary',
      '5th Grade': 'success',
      '6th Grade': 'info',
      '7th Grade': 'warning',
      '8th Grade': 'danger',
      '9th Grade': 'primary',
      '10th Grade': 'success',
      '11th Grade': 'info',
      '12th Grade': 'warning'
    };
    
    return gradeColors[grade] || 'secondary';
  }
}
