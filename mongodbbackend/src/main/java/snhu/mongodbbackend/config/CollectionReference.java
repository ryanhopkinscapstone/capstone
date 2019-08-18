package snhu.mongodbbackend.config;

public enum CollectionReference {

    REVIEWS_COLLECTION_NAME("instruments");

    CollectionReference(String reference) {
        this.reference = reference;
    }

    private String reference;

    public String getReference() {
        return reference;
    }

}
