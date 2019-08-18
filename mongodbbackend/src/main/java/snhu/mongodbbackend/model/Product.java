package snhu.mongodbbackend.model;


import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
public class Product {

    @Field("_id")
    private String productID;
    private Long reviewsCount;
}
