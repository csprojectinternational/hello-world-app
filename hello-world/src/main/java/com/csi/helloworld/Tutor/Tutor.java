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

    /* METHOD FOR PERSONALIZED STUDENT LIST FOR EACH TUTOR

        public static ArrayList<Student> tutorWaitingList(Tutor tutor) {}

        should take the waitingListMaster from the Student class and use it to create a list
        that will appear specifically on a given tutor's dashboard. this is important bc 
        different tutors will play different instruments, so tutors need to get people who
        play the same instrument as them first, then people who play a similar instrument, and
        then the rest of the people (this can be determined using the arrays that are in the 
        student class).

        it will also need an algorithm that sorts students based on teaching priority within the 
        instrument categories
        factors that affect this include: grade level, current band, and whether they are currently 
        enrolled in lessons. (youngest students in the lowest bands who are not currently enrolled
        in lessons should be first). this could be implemented by assigning a score to each attrbute, 
        and sorting the students by their score.

    */

}