package snhu.mongodbbackend.projection;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.stereotype.Service;
import snhu.mongodbbackend.config.CollectionReference;
import snhu.mongodbbackend.config.ReviewDocumentReference;
import snhu.mongodbbackend.model.Score;
import java.util.List;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;

/**
 * Projection class to create the aggregation pipeline for API call
 * between MongoDB and Java/Spring
 */
@Service
@Slf4j
public class ScoreProjection {

    @Autowired
    private MongoTemplate mongoTemplate;

    // Mongo aggregation to get reviewsCount by each score
    public List<Score> getReviewsCountByScore() {
        log.info("Review Count By Score CALL");
        GroupOperation group = group(ReviewDocumentReference.SCORE.getReference()).count().as("reviewCount");
        ProjectionOperation project = project().andExpression("reviewCount").as("reviewsCount");
        SortOperation sort = sort(new Sort(Sort.Direction.DESC, "reviewsCount"));
        Aggregation aggregation = newAggregation(group, project, sort);
        AggregationResults<Score> result = mongoTemplate.aggregate(aggregation, CollectionReference.REVIEWS_COLLECTION_NAME.getReference(), Score.class);
        return result.getMappedResults();
    }
}
