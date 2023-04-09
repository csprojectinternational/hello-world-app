package com.csi.helloworld.Tutor;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

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
    private String band;
    private String instrument;
    private String kisdID;
    private String password;
    private String settingPreference;
    private int distinctionScore;
    private int grade;

    // getter and setter methods for id
    @Field("_id")
    public ObjectId getId() {
        return this.id;
    }

    @Field("_id")
    public void setId(ObjectId id) {
        this.id = id;
    }

    // getter and setter methods for band
    @Field("band")
    public String getBand() {
        return this.band;
    }

    @Field("band")
    public void setBand(String band) {
        this.band = band;
    }

    // getter and setter methods for firstName
    @Field("firstName")
    public String getFirstName() {
        return this.firstName;
    }

    @Field("firstName")
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    // getter and setter methods for lastName
    @Field("lastName")
    public String getLastName() {
        return this.lastName;
    }

    @Field("lastName")
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    // getter and setter methods for instrument
    @Field("instrument")
    public String getInstrument() {
        return this.instrument;
    }

    @Field("instrument")
    public void setInstrument(String instrument) {
        this.instrument = instrument;
    }

    // getter and setter methods for kisdID
    @Field("kisdID")
    public String getKisdID() {
        return this.kisdID;
    }

    @Field("kisdID")
    public void setKisdID(String kisdID) {
        this.kisdID = kisdID;
    }

    // getter and setter methods for password
    @Field("password")
    public String getPassword() {
        return this.password;
    }

    @Field("password")
    public void setPassword(String password) {
        this.password = password;
    }

    // getter and setter methods for settingPreference
    @Field("settingPreference")
    public String getSettingPreference() {
        return this.settingPreference;
    }

    @Field("settingPreference")
    public void setSettingPreference(String settingPreference) {
        this.settingPreference = settingPreference;
    }

    // getter and setter methods for distinctionScore
    @Field("distinctionScore")
    public int getDistinctionScore() {
        return this.distinctionScore;
    }

    @Field("distinctionScore")
    public void setDistinctionScore(int distinctionScore) {
        this.distinctionScore = distinctionScore;
    }

    // getter and setter methods for grade
    @Field("grade")
    public int getGrade() {
        return this.grade;
    }

    @Field("grade")
    public void setGrade(int grade) {
        this.grade = grade;
    }

    // getter and setter methods for phoneNumber
    @Field("phoneNumber")
    public String getPhoneNumber() {
        return this.phoneNumber;
    }

    @Field("phoneNumber")
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
