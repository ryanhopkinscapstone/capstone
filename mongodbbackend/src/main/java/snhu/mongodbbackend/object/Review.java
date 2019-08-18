package snhu.mongodbbackend.object;

public class Review {

    private String id;
    private String reviewerID;
    private String asin;
    private String reviewerName;
    private String unixReviewTime;
    private String reviewText;
    private String summary;
    private String reviewTime;
    private double overall = 0.0;
    private double[] helpful;

    public Review() {}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getReviewerID() {
        return reviewerID;
    }

    public void setReviewerID(String reviewerID) {
        this.reviewerID = reviewerID;
    }

    public String getAsin() {
        return asin;
    }

    public void setAsin(String asin) {
        this.asin = asin;
    }

    public String getReviewerName() {
        return reviewerName;
    }

    public void setReviewerName(String reviewerName) {
        this.reviewerName = reviewerName;
    }

    public String getUnixReviewTime() {
        return unixReviewTime;
    }

    public void setUnixReviewTime(String unixReviewTime) {
        this.unixReviewTime = unixReviewTime;
    }

    public String getReviewText() {
        return reviewText;
    }

    public void setReviewText(String reviewText) {
        this.reviewText = reviewText;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getReviewTime() {
        return reviewTime;
    }

    public void setReviewTime(String reviewTime) {
        this.reviewTime = reviewTime;
    }

    public double getOverall() {
        return overall;
    }

    public void setOverall(double overall) {
        this.overall = overall;
    }

    public double[] getHelpful() {
        return helpful;
    }

    public void setHelpful(double[] helpful) {
        this.helpful = helpful;
    }
}
