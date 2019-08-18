package snhu.mongodbbackend.endpoint;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import snhu.mongodbbackend.projection.ScoreProjection;

/**
 * Controller to handle all HTTP calls for score grouping
 */
@RestController
@RequestMapping("reviews")
@Slf4j
public class ScoreController {

    @Autowired
    private ScoreProjection scoreProjection;

    /**
     * Gets count of reviews for each overall score
     *
     * @return reviewCount for each score
     */
    @GetMapping("/getReviewsCountByScore")
    public ResponseEntity getReviewsCountByScore() {
        log.info("HTTP GET Request Reviews number for all existing scores (from 1 to 5)");
        return ResponseEntity.ok(this.scoreProjection.getReviewsCountByScore());
    }
}
