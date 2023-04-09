package com.csi.helloworld;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "root")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Student {

    @Id
    private ObjectId id;
    private String band;
    private String firstName;
    private String lastName;
    private String instrument;
    private String kisdID;
    private String password;
    private boolean currentlyInLessons;
    private int grade;

    // getter and setter methods for id
    @Field("_id")
    public ObjectId getId() {
        return id;
    }

    @Field("_id")
    public void setId(ObjectId id) {
        this.id = id;
    }

    // getter and setter methods for band
    @Field("band")
    public String getBand() {
        return band;
    }

    @Field("band")
    public void setBand(String band) {
        this.band = band;
    }

    // getter and setter methods for firstName
    @Field("firstName")
    public String getFirstName() {
        return firstName;
    }

    @Field("firstName")
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    // getter and setter methods for lastName
    @Field("lastName")
    public String getLastName() {
        return lastName;
    }

    @Field("lastName")
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    // getter and setter methods for instrument
    @Field("instrument")
    public String getInstrument() {
        return instrument;
    }

    @Field("instrument")
    public void setInstrument(String instrument) {
        this.instrument = instrument;
    }

    // getter and setter methods for kisdID
    @Field("kisdID")
    public String getKisdID() {
        return kisdID;
    }

    @Field("kisdID")
    public void setKisdID(String kisdID) {
        this.kisdID = kisdID;
    }

    // getter and setter methods for password
    @Field("password")
    public String getPassword() {
        return password;
    }

    @Field("password")
    public void setPassword(String password) {
        this.password = password;
    }

    // getter and setter methods for currentlyInLessons
    @Field("currentlyInLessons")
    public boolean isCurrentlyInLessons() {
        return currentlyInLessons;
    }

    @Field("currentlyInLessons")
    public void setCurrentlyInLessons(boolean currentlyInLessons) {
        this.currentlyInLessons = currentlyInLessons;
    }

    // getter and setter methods for grade
    @Field("grade")
    public int getGrade() {
        return grade;
    }

    @Field("grade")
    public void setGrade(int grade) {
        this.grade = grade;
    }

}
