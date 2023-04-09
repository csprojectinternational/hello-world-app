package com.csi.helloworld.Tutor;

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
@RequestMapping("api/v1/tutors")
public class TutorController {

    @Autowired
    private TutorService tutorService;

    @PostMapping("/newTutor")
    //@ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Void> createTutor(@RequestBody Tutor tutor) {
        tutorService.addTutor(tutor);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/all")
    public List<Tutor> getTutors() {
        return tutorService.findAllTutors();
    }

    @GetMapping("/{id}")
    public Tutor getTutor(@PathVariable ObjectId id) {
        return tutorService.getTutorById(id);
    }

    @GetMapping("/firstName/{firstName}")
    public List<Tutor> findTutorUsingFirstName(@PathVariable String firstName) {
        return tutorService.getTutorByFirstName(firstName);
    }

    @GetMapping("/kisdID/{kisdID}")
    public List<Tutor> getTutorByKisdID(@PathVariable String kisdID) {
        return tutorService.getTutorByKisdID(kisdID);
    }

    @PutMapping
    public Tutor modifyTutor(@RequestBody Tutor tutor) {
        return tutorService.updateTutor(tutor);
    }

    @DeleteMapping("/{id}")
    public String deleteTutor(@PathVariable ObjectId id) {
        return tutorService.deleteTutor(id);
    }
}