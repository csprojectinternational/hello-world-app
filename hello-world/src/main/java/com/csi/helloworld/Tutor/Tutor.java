package com.csi.helloworld.Tutor;

import java.util.ArrayList;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import com.csi.helloworld.Student.Student;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "tutors")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Tutor {

    @Id
    private ObjectId id;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String email;
    private String band;
    private String instrument;
    private String kisdID;
    private String password;
    private String settingPreference;
    //private int distinctionScore;
    private int grade;

    private ArrayList<Student> scheduledStudents = new ArrayList<>();



}