package com.csi.helloworld;

import java.util.List;
//import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("api/v1/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/newStudent")
    //@ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Void> createStudent(@RequestBody Student student) {
        studentService.addStudent(student);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/all")
    public List<Student> getStudents() {
        return studentService.findAllStudents();
    }

    @GetMapping("/{id}")
    public Student getStudent(@PathVariable ObjectId id) {
        return studentService.getStudentById(id);
    }

    @GetMapping("/firstName/{firstName}")
    public List<Student> findStudentUsingFirstName(@PathVariable String firstName) {
        return studentService.getStudentByFirstName(firstName);
    }

    @GetMapping("/kisdID/{kisdID}")
    public List<Student> getStudentByKisdID(@PathVariable String kisdID) {
        return studentService.getStudentByKisdID(kisdID);
    }

    @PutMapping
    public Student modifyStudent(@RequestBody Student student) {
        return studentService.updateStudent(student);
    }

    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable ObjectId id) {
        return studentService.deleteStudent(id);
    }
}