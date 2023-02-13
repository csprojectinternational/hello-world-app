package com.csi.helloworld;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface HelloRepository extends MongoRepository<Hello, ObjectId> {
    
}
