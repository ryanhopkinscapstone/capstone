package snhu.mongodbbackend.endpoint;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import snhu.mongodbbackend.projection.ReviewerProjection;

/**
 * Controller to handle all HTTP calls for reviewer ID grouping
 */
@RestController
@RequestMapping("reviews")
@Slf4j
public class ReviewerController {

    @Autowired
    private ReviewerProjection reviewerProjection;

    /**
     * Gets reviews counted by reviewer ID
     *
     * @return reviewsCount and reviewer ID
     */
    @GetMapping("/getReviewsCountByReviewer")
    public ResponseEntity getReviewsCountByReviewer() {
        return ResponseEntity.ok(this.reviewerProjection.getCountByReviewer());
    }
}
