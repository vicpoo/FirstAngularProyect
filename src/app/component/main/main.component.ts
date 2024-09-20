import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importamos FormsModule para trabajar con formularios
import { Student, StudentService } from '../../services/student.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public students: Student[] = [];

  // Variables para capturar los datos del formulario
  public firstName: string = '';
  public lastName: string = '';
  public age: number | null = null;

  constructor(private studentService: StudentService) {}

  // Método para agregar estudiante (sin actualizar la lista)
  addStudent() {
    if (this.firstName && this.lastName && this.age !== null) {
      let student: Student = {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age
      };
      this.studentService.addStudent(student);
      this.clearForm(); // Limpiamos el formulario después de agregar
    } else {
      alert('Por favor, completa todos los campos');
    }
  }

  // Método para obtener todos los estudiantes y mostrarlos
  getAll() {
    this.students = this.studentService.getStudents();
  }

  // Limpiar los campos del formulario
  clearForm() {
    this.firstName = '';
    this.lastName = '';
    this.age = null;
  }
}
