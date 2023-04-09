package com.csi.helloworld;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface StudentRepository extends MongoRepository<Student, ObjectId> {

    List<Student> findByFirstName(String FirstName);

    //@Query("{value: ?0 }")
    List<Student> getStudentsByKisdID(String kisdID);
}
