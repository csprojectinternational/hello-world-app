package com.csi.helloworld;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/hellos")
public class HelloController {

    @Autowired
    private HelloService helloService;

    @GetMapping
    public ResponseEntity<List<Hello>> getAllHellos() {
        return new ResponseEntity<List<Hello>>(helloService.allHellos(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Hello>> getSingleHello(@PathVariable ObjectId id){
        return new ResponseEntity<Optional<Hello>>(helloService.singleHello(id), HttpStatus.OK);
    }
}


