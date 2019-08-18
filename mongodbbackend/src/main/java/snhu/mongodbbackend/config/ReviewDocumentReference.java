package snhu.mongodbbackend.config;

public enum ReviewDocumentReference {

    REVIEWER_ID("reviewerID"),
    PRODUCT_ID("asin"),
    REVIEWER_NAME("reviewerName"),
    HELPFUL("helpful"),
    REVIEW_TEXT("reviewText"),
    SCORE("overall"),
    SUMMARY("summary"),
    UNIX_REVIEW_TIME("unixReviewTime"),
    REVIEW_DATE("reviewTime");

    private String reference;

    ReviewDocumentReference(String reference) {
        this.reference = reference;
    }

    public String getReference(){
        return reference;
    }
}
