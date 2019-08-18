package snhu.mongodbbackend.endpoint;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import snhu.mongodbbackend.projection.YearProjection;

/**
 * Controller to handle all HTTP calls for year grouping
 */
@RestController
@RequestMapping("reviews")
@Slf4j
public class YearController {

    @Autowired
    private YearProjection yearProjection;

    /**
     * Gets all reviews for each year
     *
     * @return reviewCount by year
     */
    @GetMapping("/getReviewsCountByYear")
    public ResponseEntity getReviewsCountByYear() {
        return ResponseEntity.ok(this.yearProjection.getReviewsCountByYear());
    }
}
