package snhu.mongodbbackend.projection;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.LimitOperation;
import org.springframework.data.mongodb.core.aggregation.SortOperation;
import org.springframework.stereotype.Service;
import snhu.mongodbbackend.config.CollectionReference;
import snhu.mongodbbackend.object.Review;
import java.util.List;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.newAggregation;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.sort;

/**
 * Projection class to create the aggregation pipeline for API call
 * between MongoDB and Java/Spring
 */
@Service
@Slf4j
public class TableProjection {

    @Autowired
    private MongoTemplate mongoTemplate;

    // Mongo aggregation to get all reviews
    public List<Review> getAllReviews() {
        log.info("All Reviews CALL");
        SortOperation sort = sort(new Sort(Sort.Direction.DESC, "reviewTime"));
        LimitOperation limit = new LimitOperation(1000);
        Aggregation aggregation = newAggregation(sort, limit);
        AggregationResults<Review> result = mongoTemplate.aggregate(aggregation, CollectionReference.REVIEWS_COLLECTION_NAME.getReference(), Review.class);
        return result.getMappedResults();
    }
}
