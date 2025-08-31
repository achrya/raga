import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { StudentRegistration } from './features/student-registration/components/student-registration/student-registration';
import { StudentList } from './features/student-registration/components/student-list/student-list';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'students', component: StudentList },
  { path: 'students/register', component: StudentRegistration },
  { path: '**', redirectTo: '/home' },
];
