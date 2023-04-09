package com.csi.helloworld.Student;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;
    
    //CRUD testing

    //create?

    public void addStudent(Student student) {
        if (student.getId() == null) {
            String idString = UUID.randomUUID().toString().split("-")[0];
            ObjectId id = new ObjectId(idString);
            student.setId(id);
        }

        student.setFirstName("John");
        student.setLastName("Doe");
        student.setBand("Symphonic");
        student.setCurrentlyInLessons(false);
        student.setPassword("ieat203");
        student.setInstrument("Trumpet");
        student.setGrade(7);
        student.setKisdID("V1929302");

        studentRepository.save(student);
    }
    
    //read
    
    public List<Student> findAllStudents() {
        return studentRepository.findAll();
    }

    //two methods that appear to achieve the same purpose but from different videos, not sure which is better
    public Student getStudentById(ObjectId id) {
        return studentRepository.findById(id).get();
    }
    public Optional<Student> singleStudent(ObjectId id) {
        return studentRepository.findById(id);
    }

    public List<Student> getStudentByFirstName(String firstName) {
        return studentRepository.findByFirstName(firstName);
    }
    public List<Student> getStudentByKisdID(String kisdID) {
        return studentRepository.getStudentsByKisdID(kisdID);
    }

    //update (template, redo later)

    public Student updateStudent(Student studentRequest) {
        //get the existing document from DB
        //populate new kisdID from request to existing object/entity/document
        Student existingStudent = studentRepository.findById(studentRequest.getId()).get();
        existingStudent.setFirstName(studentRequest.getFirstName());
        existingStudent.setKisdID(studentRequest.getKisdID());
        
        return studentRepository.save(existingStudent);
    }

    //delete

    public String deleteStudent(ObjectId id) {
        studentRepository.deleteById(id);
        return id.toString() + "student deleted from dashboard";
    }
}