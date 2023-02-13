package com.csi.helloworld;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HelloService {
    @Autowired
    private HelloRepository helloRepository;
    
    public List<Hello>allHellos() {
        return helloRepository.findAll();
    }

    public Optional<Hello> singleHello(ObjectId id) {
        return helloRepository.findById(id);
    }
}
