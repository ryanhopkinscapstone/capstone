package snhu.mongodbbackend.endpoint;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import snhu.mongodbbackend.projection.TableProjection;

/**
 * Controller to handle all HTTP calls for table requests
 */
@RestController
@RequestMapping("reviews")
@Slf4j
public class TableController {

    @Autowired
    private TableProjection tableProjection;

    /**
     * Gets all reviews from JSON and sorts
     *
     * @return all reviews
     */
    @GetMapping("/getAllReviews")
    public ResponseEntity getAllReviews() {
        return ResponseEntity.ok(this.tableProjection.getAllReviews());
    }
}
