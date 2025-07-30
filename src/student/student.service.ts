import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        { id: 1, name: 'Ali', age: 20 },
        { id: 2, name: 'ahmad', age: 22 },
        { id: 3, name: 'sara', age: 21 },
    ];
    getAllStudents() {
        return this.students
    }
    getStudentById(id: number) {
        const student = this.students.find(std => std.id === id);
        if (!student) {
            throw new NotFoundException(`Student with id ${id} not found`);
        }
        return student;
    }
    createStudent(data: { name: string, age: number }) {
        const newStudent = {
            id: Date.now(),
            name: data.name,
            age: data.age
        }
        this.students.push(newStudent);
        return newStudent;
    }
    updateStudent(id: number, data: { name: string, age: number }) {

        const index = this.students.findIndex(std => std.id === id);
        if (index === -1) {
            throw new NotFoundException(`Student with id ${id} not found`);
        }
        this.students[index] = { id, ...data };
        return this.students[index];
    }


    patchStudent(id: number, data: Partial<{ name: string, age: number }>) {
        const student = this.getStudentById(id);

        //Object.assign is used to update the properties of the student object,only those that are provided will be updated
        Object.assign(student, data);
        return student;
    }
    deleteStudent(id: number) {
        const index = this.students.findIndex(std => std.id === id);
        if (index === -1) {
            throw new NotFoundException(`Student with id ${id} not found`);
        }
        //1 tells to remove one element from the array at the specified index
        // what splice returns? 
        // it returns an array of the removed elements
        const deleted = this.students.splice(index, 1);
        return { message: `Student Deleted `, student: deleted[0] };

    }

}
