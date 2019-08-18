package snhu.mongodbbackend.projection;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.stereotype.Service;
import snhu.mongodbbackend.config.CollectionReference;
import snhu.mongodbbackend.config.ReviewDocumentReference;
import snhu.mongodbbackend.model.Year;

import java.util.List;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;

/**
 * Projection class to create the aggregation pipeline for API call
 * between MongoDB and Java/Spring
 */
@Service
@Slf4j
public class YearProjection {

    @Autowired
    private MongoTemplate mongoTemplate;

    // Mongo aggregation to get all reviewsCount by Year
    public List<Year> getReviewsCountByYear() {
        Aggregation aggregation = newAggregation(
                project(ReviewDocumentReference.UNIX_REVIEW_TIME.getReference()).and("unixReviewTime").multiply(1000).as("year"),
                project("year").and("year").project("toDate"),
                project("year").and("year").extractYear(),
                group("year").count().as("reviewsCount"),
                project("reviewsCount").and("year").previousOperation(),
                sort(Sort.Direction.ASC, "year")
        );
        AggregationResults<Year> groupResults = mongoTemplate.aggregate(aggregation, CollectionReference.REVIEWS_COLLECTION_NAME.getReference(), Year.class);
        return groupResults.getMappedResults();
    }
}
