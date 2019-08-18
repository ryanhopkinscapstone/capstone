package snhu.mongodbbackend.model;


import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
public class Reviewer {

    @Field("_id")
    private String reviewerID;
    private Long reviewsCount;
}
