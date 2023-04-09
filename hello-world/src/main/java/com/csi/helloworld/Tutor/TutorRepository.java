package com.csi.helloworld.Tutor;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface TutorRepository extends MongoRepository<Tutor, ObjectId> {

    List<Tutor> findByFirstName(String FirstName);

    //@Query("{value: ?0 }")
    List<Tutor> getTutorsByKisdID(String kisdID);
}
