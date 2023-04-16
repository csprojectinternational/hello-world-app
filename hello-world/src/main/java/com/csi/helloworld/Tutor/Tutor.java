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




    public static ArrayList<Student> tutorWaitingList(Tutor tutor) {
        ArrayList<Student> waitingList = new ArrayList<>();
    
        for (Student student : Student.waitingListMaster) {
            if (student.playsSameOrSimilarInstrument(tutor.instrument)) {
                waitingList.add(student);
            }
        }
    
        Collections.sort(waitingList, new Comparator<Student>() {
            @Override
            public int compare(Student s1, Student s2) {
                int score1 = calculateTeachingPriorityScore(s1, tutor);
                int score2 = calculateTeachingPriorityScore(s2, tutor);
                return score2 - score1;
            }
        });
    
        return waitingList;
    }
    
    private static int calculateTeachingPriorityScore(Student student, Tutor tutor) {
        int score = 0;
    
        int gradeLevel = student.getGrade();
        if (gradeLevel == 6) {
            score += 0;
        } else if (gradeLevel == 7) {
            score += 1;
        } else if (gradeLevel == 8) {
            score += 3;
        }
    
        String bandLevel = student.getBand();
        if (bandLevel.equals(Beginner)) {
            score += 0;
        } else if (bandLevel.equals(Lyric)) {
            score += 0;
        } else if (bandLevel.equals(Concert)) {
            score += 1;
        } else if (bandLevel.equals(Symphonic)) {
            score += 3;
        }
    
        if (student.getCurrentlyInLessons()) {
            score += 4;
        } else {
            score += 0;
        }
    
        String studentInstrument = student.getInstrument();
        String tutorInstrument = tutor.getInstrument();
        
    if (studentInstrument.equals(tutorInstrument)) {
        score += 0;
    }
    
    
    else if (Arrays.asList(Student.saxophones).contains(studentInstrument) && Arrays.asList(Student.saxophones).contains(tutorInstrument)) {
        score += 3;
    }
    
    
    else if (Arrays.asList(Student.clarinets).contains(studentInstrument) && Arrays.asList(Student.clarinets).contains(tutorInstrument)) {
        score += 3;
    }
    
    
    else if (Arrays.asList(Student.woodwinds).contains(studentInstrument) && Arrays.asList(Student.woodwinds).contains(tutorInstrument)) {
        score += 10;
    }
    
    
    else if (Arrays.asList(Student.brass).contains(studentInstrument) && Arrays.asList(Student.brass).contains(tutorInstrument)) {
        score += 10;
    }
    
    
    else {
        score += 25;
    }
        
        return score;
    }
    
    public boolean playsSameOrSimilarInstrument(Tutor tutor) {
        if (this.instrument.equals(tutor.getInstrument())) {
            return true;
        } else if (Arrays.asList(Student.woodwinds).contains(tutor.getInstrument())) {
            if (Arrays.asList(Student.woodwinds).contains(this.instrument)) {
                return true;
            } else if (tutor.getInstrument().equals("Alto Saxophone") || tutor.getInstrument().equals("Tenor Saxophone")) {
                if (Arrays.asList(Student.saxophones).contains(this.instrument)) {
                    return true;
                }
            } else if (tutor.getInstrument().equals("Clarinet") || tutor.getInstrument().equals("Bass Clarinet")) {
                if (Arrays.asList(Student.clarinets).contains(this.instrument)) {
                    return true;
                }
            } else if (Arrays.asList(Student.brass).contains(tutor.getInstrument())) {
                if (Arrays.asList(Student.brass).contains(this.instrument)) {
                    return true;
                }
            }
        }
        return false;
    }
    

    public void scheduleLesson(Student student) {
        if (this.scheduledStudents.contains(student)) {
            return;
        }
    
        Student.removeFromAllWaitingLists(student);
    
        this.scheduledStudents.add(student);
        student.setCurrentTutor(this.getKisdID());
    }
    public static void removeFromAllWaitingLists(Student student) {
    
        if (Student.waitingListMaster.contains(student)) {
            Student.waitingListMaster.remove(student);
        }
    
        for (Tutor tutor : Tutor.tutors) {
            if (tutor.waitingList.contains(student)) {
                tutor.waitingList.remove(student);
            }
        }
    }
    
}