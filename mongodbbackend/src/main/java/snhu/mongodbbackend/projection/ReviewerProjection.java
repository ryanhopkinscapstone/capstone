package snhu.mongodbbackend.projection;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.stereotype.Service;
import snhu.mongodbbackend.config.CollectionReference;
import snhu.mongodbbackend.config.ReviewDocumentReference;
import snhu.mongodbbackend.model.Reviewer;
import java.util.List;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;

/**
 * Projection class to create the aggregation pipeline for API call
 * between MongoDB and Java/Spring
 */
@Service
@Slf4j
public class ReviewerProjection {

    @Autowired
    private MongoTemplate mongoTemplate;

    // Mongo aggregation to get reviews count by each reviewer
    public List<Reviewer> getCountByReviewer() {
        log.info("Review Count By Reviewer CALL");
        GroupOperation group = group(ReviewDocumentReference.REVIEWER_ID.getReference()).count().as("reviewsCount");
        SortOperation sort = sort(new Sort(Sort.Direction.DESC, "reviewsCount"));
        ProjectionOperation project = project().andExpression("reviewsCount").as("reviewsCount");
        Aggregation aggregation = newAggregation(group, sort, project);
        AggregationResults<Reviewer> result = mongoTemplate.aggregate(aggregation, CollectionReference.REVIEWS_COLLECTION_NAME.getReference(), Reviewer.class);
        return result.getMappedResults();
    }
}
