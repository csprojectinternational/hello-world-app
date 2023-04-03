package com.csi.helloworld;

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

    public Student addStudent(Student student) {
        String idString = UUID.randomUUID().toString().split("-")[0]; //this method was written with chatGPT help
        ObjectId id = new ObjectId(idString);
        student.setId(id);
        return studentRepository.save(student);
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

    //update

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