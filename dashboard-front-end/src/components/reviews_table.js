import React, {Component} from "react";
import {MDBDataTable} from "mdbreact";
import {view} from "react-easy-state";
import reviewStore from "../stores/review_store";

class ReviewsTable extends Component {
    getColumns() {
        const reviewsTableColumns = [
            { label: 'ASIN', field: 'asin', sort: 'asc', width: 50 },
            { label: 'Month', field: 'reviewMonth', sort: 'asc', width: 3 },
            { label: 'Year', field: 'reviewYear', sort: 'asc', width: 5 },
            { label: 'Reviewer ID', field: 'reviewerID', sort: 'asc', width: 50 },
            { label: 'Reviewer Name', field: 'reviewerName', sort: 'asc', width: 50 },
            { label: 'Score', field: 'overall', sort: 'asc', width: 3 },
            { label: 'Summary', field: 'summary', sort: 'asc', width: 50 }
        ];
        return reviewsTableColumns;
    }

    getRows(reviewsData){
        // Handle null case before reviews data is loaded
        if (reviewsData == null || typeof (reviewsData) == 'undefined'){
            return [];
        }

        // Handle case with no reviews
        if (!(reviewsData.length > 0)) {
            return [];
        }

        // Maps JSON data to columns
        return reviewsData.map((object) => {
            const [reviewYear, reviewMonth] = this.getTimeInfo(object.reviewTime);
            return {
                asin: object.asin,
                reviewMonth: reviewMonth,
                reviewYear: reviewYear,
                reviewerID: object.reviewerID,
                reviewerName: object.reviewerName,
                score: object.overall,
                summary: object.summary
            }
        });
    }

    // Takes string of full date/time and parses into separate variables, returns an array
     getTimeInfo(reviewTime) {
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

    // Generate table
    render() {
        const data = {
            columns: this.getColumns(),
            rows: this.getRows(reviewStore.reviews)
        };
        return (
            <MDBDataTable
                striped
                bordered
                hover
                scrollX
                responsive
                maxHeight="50vh"
                data={data}
            />
        )
    }
}

export default view(ReviewsTable);