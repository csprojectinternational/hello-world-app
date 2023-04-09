package com.csi.helloworld.Tutor;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TutorService {
    @Autowired
    private TutorRepository tutorRepository;
    
    //CRUD testing

    //create?

    public void addTutor(Tutor tutor) {
        if (tutor.getId() == null) {
            String idString = UUID.randomUUID().toString().split("-")[0];
            ObjectId id = new ObjectId(idString);
            tutor.setId(id);
        }

        tutorRepository.save(tutor);
    }
    
    //read
    
    public List<Tutor> findAllTutors() {
        return tutorRepository.findAll();
    }

    //two methods that appear to achieve the same purpose but from different videos, not sure which is better
    public Tutor getTutorById(ObjectId id) {
        return tutorRepository.findById(id).get();
    }
    public Optional<Tutor> singleTutor(ObjectId id) {
        return tutorRepository.findById(id);
    }

    public List<Tutor> getTutorByFirstName(String firstName) {
        return tutorRepository.findByFirstName(firstName);
    }
    public List<Tutor> getTutorByKisdID(String kisdID) {
        return tutorRepository.getTutorsByKisdID(kisdID);
    }

    //update (template, redo later)

    public Tutor updateTutor(Tutor tutorRequest) {
        //get the existing document from DB
        //populate new kisdID from request to existing object/entity/document
        Tutor existingTutor = tutorRepository.findById(tutorRequest.getId()).get();
        existingTutor.setFirstName(tutorRequest.getFirstName());
        existingTutor.setKisdID(tutorRequest.getKisdID());
        
        return tutorRepository.save(existingTutor);
    }

    //delete

    public String deleteTutor(ObjectId id) {
        tutorRepository.deleteById(id);
        return id.toString() + "tutor deleted from dashboard";
    }
}