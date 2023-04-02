package com.csi.helloworld;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface HelloRepository extends MongoRepository<Hello, ObjectId> {

    List<Hello> findByKey(int key);

    @Query("{value: ?0 }")
    List<Hello> getHellosByValue(String value);
}
