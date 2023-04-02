package com.csi.helloworld;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HelloService {
    @Autowired
    private HelloRepository helloRepository;
    
    //CRUD testing

    //create?

    public Hello addHello(Hello hello) {
        String idString = UUID.randomUUID().toString().split("-")[0]; //this method was written with chatGPT help
        ObjectId id = new ObjectId(idString);
        hello.setId(id);
        return helloRepository.save(hello);
    }
    
    //read
    
    public List<Hello> findAllHellos() {
        return helloRepository.findAll();
    }

    //two methods that appear to achieve the same purpose but from different videos, not sure which is better
    public Hello getHelloById(ObjectId id) {
        return helloRepository.findById(id).get();
    }
    public Optional<Hello> singleHello(ObjectId id) {
        return helloRepository.findById(id);
    }

    public List<Hello> getHelloByKey(int key) {
        return helloRepository.findByKey(key);
    }
    public List<Hello> getHelloByValue(String value) {
        return helloRepository.getHellosByValue(value);
    }

    //update

    public Hello updateHello(Hello helloRequest) {
        //get the existing document from DB
        //populate new value from request to existing object/entity/document
        Hello existingHello = helloRepository.findById(helloRequest.getId()).get();
        existingHello.setKey(helloRequest.getKey());
        existingHello.setValue(helloRequest.getValue());
        
        return helloRepository.save(existingHello);
    }

    //delete

    public String deleteHello(ObjectId id) {
        helloRepository.deleteById(id);
        return id.toString() + "hello deleted from dashboard";
    }
}