import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }


    @Get()
    @ApiOperation({ summary: 'Get all students' })
    getAll() {
        return this.studentService.getAllStudents();
    }
    @Get(':id')
    @ApiOperation({ summary: 'Get student by ID' })
    getOne(@Param('id') id: string) {
        return this.studentService.getStudentById(Number(id));
    }

    @Post()
    @ApiOperation({ summary: 'Create a new student' })

    create(@Body() data: { name: string, age: number }) {
        console.log('Received body:', data); // <--- add this
        return this.studentService.createStudent(data);
    }
    @Put(':id')
    @ApiOperation({ summary: 'Update student by ID' })
    update(@Param('id') id: string, @Body() body: { name: string, age: number }) {
        return this.studentService.updateStudent(Number(id), body);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Partially update student by ID' })
    patch(@Param('id') id: string, @Body() body: Partial<{ name: string, age: number }>) {
        return this.studentService.patchStudent(Number(id), body);
    }
    @Delete(':id')
    @ApiOperation({ summary: 'Delete student by ID' })
    remove(@Param('id') id: string) {
        return this.studentService.deleteStudent(Number(id));
    }
}