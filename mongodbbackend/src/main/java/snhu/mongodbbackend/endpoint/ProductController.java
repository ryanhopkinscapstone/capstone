package snhu.mongodbbackend.endpoint;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import snhu.mongodbbackend.projection.ProductProjection;

/**
 * Controller to handle all HTTP calls for product grouping
 */
@RestController
@RequestMapping("reviews")
@Slf4j
public class ProductController {

    @Autowired
    private ProductProjection productProjection;

    /**
     * Gets reviews counted by the product ID
     *
     * @return reviewCount and productID of all reviews
     */
    @GetMapping("/getReviewsCountByProduct")
    public ResponseEntity getReviewsCountByProduct() {
        return ResponseEntity.ok(this.productProjection.getReviewsByProduct());
    }
}
