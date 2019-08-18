import React, {Component} from "react";
import {PieChart} from "react-d3-components";
import {view} from "react-easy-state";
import reviewStore from "../stores/review_store";

// Default data
let data = {
    label: 'Review Count by Score (Demo)',
    values: [{x: '5 stars', y: 34},
             {x: '4 stars', y: 21},
             {x: '3 stars', y: 13},
             {x: '2 stars', y: 8},
             {x: '1 star', y: 5}]
};

let sort = null;

class ReviewsPieChart extends Component{
    // Set default state
    state = {data: data};

    // Set state based on JSON data if not empty
    componentDidMount() {
        if (reviewStore.reviews.length > 0) {
            const pieChartData = this.getPieChartData();
            this.setState({data: pieChartData});
        }
    }

    getPieChartData() {
        const pieChartData = {
            label: "Review Count by Score - JSON Data",
            values: []
        };
        const reviewCountByScore = reviewStore.getReviewCountByScore();

        // Iterate through each review to get score, x value changes if score equals 1
        Object.keys(reviewCountByScore).forEach((score) => {
            const xValue = (score === "1") ? `${score} star` : `${score} stars`;
            const yValue = reviewCountByScore[score];

            pieChartData.values.push({x: xValue, y: yValue});
        });
        return pieChartData;
    }

    // Generate chart
    render() {
        const {data} = this.state;
        return (
            <div>
                <h2>{data.label}</h2>
                <PieChart
                    data={data}
                    width={600}
                    height={400}
                    margin={{top:10, bottom: 10, left: 100, right: 100}}
                    sort={sort}
                />
            </div>
        )
    }
}

export default view(ReviewsPieChart);