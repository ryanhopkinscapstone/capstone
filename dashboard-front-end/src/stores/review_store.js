import {store} from "react-easy-state";

// Runs data parse requiring program to wait until the data is returned
async function parseJson(response){
    const jsonData = [];
    const rawData = await response.text();

    // Read json file and parse on new line split, creating an array for later use
    rawData.split("\n").forEach((jsonString) => {
        if (jsonString.length > 0) {
            try {
                jsonData.push(JSON.parse(jsonString));
            } catch (error) {
                console.error(error);
            }
        }
    });
    return jsonData;
}

// Takes string of full date/time and parses into separate variables, returns an array
function getTimeInfo(reviewTime) {
    const rawTimeInfo = reviewTime.toString();
    let timeInfo, reviewYear, reviewMonth, reviewDay;

    // Parse string into array
    if (rawTimeInfo.length > 0) {
        timeInfo = rawTimeInfo.split(', ');
        reviewYear = timeInfo[1].toString();
        timeInfo = timeInfo[0].toString().split(' ');
        reviewMonth = timeInfo[0].toString();
        reviewDay = timeInfo[1].toString();

        return [reviewYear, reviewMonth, reviewDay];
    } else {
        return ["UNKNOWN_YEAR", "UNKNOWN_MONTH", "UNKNOWN_DAY"];
    }
}

// Cache data locally to speed up processing of charts
// Will switch to API calls through spring and mongoDB
// in future iteration
const reviewStore = store({
    reviews: [],
    async loadData(jsonUrl){
        const response = await fetch(jsonUrl);
        const jsonData = await parseJson(response);
        reviewStore.reviews = jsonData;
    },

    // Iterates through reviews and counts based on reviewerID
    getReviewCountByReviewer(){
        const reviewCountByReviewer = {};

        reviewStore.reviews.forEach((review) => {
            const {reviewerID} = review;

            // Check if reviews includes reviewID key
            if (!Object.keys(reviewCountByReviewer).includes(reviewerID)){
                reviewCountByReviewer[reviewerID] = 0;
            }
            reviewCountByReviewer[reviewerID] += 1;
        });
        return reviewCountByReviewer;
    },

    // Iterate through reviews and counts based on asin (Product ID)
    getReviewCountByProduct(){
        const reviewCountByProduct = {};

        reviewStore.reviews.forEach((review) => {
            const {asin} = review;

            // Check if reviews includes an asin (product ID) key
            if (!Object.keys(reviewCountByProduct).includes(asin)){
                reviewCountByProduct[asin] = 0;
            }
            reviewCountByProduct[asin] += 1;
        });
        return reviewCountByProduct;
    },

    // Iterates through reviews and counts based on score (overall key)
    getReviewCountByScore(){
        const reviewCountByScore = {};

        reviewStore.reviews.forEach((review) => {
            const score = review.overall.toString();

            // Check if reviews includes a score key
            if (!Object.keys(reviewCountByScore).includes(score)){
                reviewCountByScore[score] = 0;
            }
            reviewCountByScore[score] += 1;
        });
        return reviewCountByScore;
    },

    // Iterates through reviews and counts based on the year/month that they were posted
    getReviewCountByMonth() {
        const reviewCountByMonth = {};

        reviewStore.reviews.forEach((review) => {
            const [year, month] = getTimeInfo(review.reviewTime);

            // Check if reviews includes a year key
            if (!Object.keys(reviewCountByMonth).includes(year)){
                reviewCountByMonth[year] = {};
            }

            // Check if reviews includes a month key
            if (!Object.keys(reviewCountByMonth[year]).includes(month)){
                reviewCountByMonth[year][month] = 0;
            }
            reviewCountByMonth[year][month] += 1;
        });
        return reviewCountByMonth;
    },

    // Iterates through reviews and counts based on the year that they were posted
    getReviewCountByYear() {
        const reviewCountByYear = {};

        reviewStore.reviews.forEach((review) => {
            const [year] = getTimeInfo(review.reviewTime);

            // Check if reviews includes a year key
            if (!Object.keys(reviewCountByYear).includes(year)){
                reviewCountByYear[year] = 0;
            }
            reviewCountByYear[year] += 1;
        });
        return reviewCountByYear;
    }
});

export default reviewStore;

