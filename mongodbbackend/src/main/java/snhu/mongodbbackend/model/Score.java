package snhu.mongodbbackend.model;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
public class Score {

    @Field("_id")
    private Double score;
    private Long reviewsCount;

}
