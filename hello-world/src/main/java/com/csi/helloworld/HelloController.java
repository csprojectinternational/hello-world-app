package com.csi.helloworld;

import java.util.List;
//import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/hellos")
public class HelloController {

    @Autowired
    private HelloService helloService;

    //code from CRUD video, 04/01

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Hello createHello(@RequestBody Hello hello) {
        return helloService.addHello(hello);
    }

    @GetMapping
    public List<Hello> getHellos() {
        return helloService.findAllHellos();
    }

    @GetMapping("/{id}")
    public Hello getHello(@PathVariable ObjectId id) {
        return helloService.getHelloById(id);
    }

    @GetMapping("/key/{key}")
    public List<Hello> findHelloUsingKey(@PathVariable int key) {
        return helloService.getHelloByKey(key);
    }

    @GetMapping("/value/{value}")
    public List<Hello> getHelloByValue(@PathVariable String value) {
        return helloService.getHelloByValue(value);
    }

    @PutMapping
    public Hello modifyHello(@RequestBody Hello hello) {
        return helloService.updateHello(hello);
    }

    @DeleteMapping("/{id}")
    public String deleteHello(@PathVariable ObjectId id) {
        return helloService.deleteHello(id);
    }

    /* CODE FROM FEBRUARY (REDONE ABOVE)
    @GetMapping
    public ResponseEntity<List<Hello>> getAllHellos() {
        return new ResponseEntity<List<Hello>>(helloService.allHellos(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Hello>> getSingleHello(@PathVariable ObjectId id){
        return new ResponseEntity<Optional<Hello>>(helloService.singleHello(id), HttpStatus.OK);
    }*/
}