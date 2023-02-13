package com.csi.helloworld;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "root")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Hello {

    @Id    
    private ObjectId id;
    private int key;
    private String value;

}
