package com.csi.helloworld.Tutor;

import java.util.List;
//import java.util.Optional;
import java.util.Optional;

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
    public ResponseEntity<List<Tutor>> getAllTutors() {
        //return tutorService.findAllTutors();
        return new ResponseEntity<List<Tutor>>(tutorService.findAllTutors(), HttpStatus.OK);
    }
    
    @GetMapping("/id/{id}")
    public ResponseEntity<Optional<Tutor>> getTutorByObjectID(@PathVariable ObjectId id) {
        return new ResponseEntity<Optional<Tutor>>(tutorService.getTutorByObjectID(id), HttpStatus.OK);
    }

    @GetMapping("/kisdID/{kisdID}")
    public ResponseEntity<Optional<Tutor>> getTutorByKisdID(@PathVariable String kisdID) {
        return new ResponseEntity<Optional<Tutor>>(tutorService.getTutorByKisdID(kisdID), HttpStatus.OK);
    }

    @GetMapping("/firstName/{firstName}")
    public ResponseEntity<Optional<Tutor>> getTutorByFirstName(@PathVariable String firstName) {
        return new ResponseEntity<Optional<Tutor>>(tutorService.getTutorByFirstName(firstName), HttpStatus.OK);
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