import React, {Component} from "react";
import {BarChart} from "react-d3-components";
import * as queryString from "query-string";
import {view} from "react-easy-state";
import reviewStore from "../stores/review_store";

// Default data in case json fails to parse
let data = {
    label: "Review Count by Reviewer (Default)",
    values: [
        {"x": "A2IBPI20UZIR0U", "y": 150},
        {"x": "A14VAT5EAX3D9S", "y": 120},
        {"x": "A195EZSQDW3E21", "y": 80},
        {"x": "A2C00NNG1ZQQG2", "y": 77},
        {"x": "A94QU4C90B1AX", "y": 70},
        {"x": "A2A039TZMZHH9Y", "y": 53},
        {"x": "A1UPZM995ZAH90", "y": 25},
        {"x": "AJNFQI3YR6XJ5", "y": 24},
        {"x": "A3M1PLEYNDEYO8", "y": 23},
        {"x": "AMNTZU1YQN1TH", "y": 23}
    ]
};

// Component for bar chart
let sort = null;

class ReviewsBarChartProduct extends Component {
    // Set state with default data
    state = {data: data};

    // Check if component mounted, if reviews contains data, set state with json data instead of default
    componentDidMount() {
        if(reviewStore.reviews.length > 0){
            const barChartData = this.getBarChartData();
            this.setState({data : barChartData});
        }
    }

    // Get data from store to populate bar chart
    getBarChartData() {
        const queryParams = queryString.parse(this.props.location.search, {ignoreQueryPrefix: true});
        const barChartData = {label: "", values: []};
        const allValues = [];

        // Checks for http param, should not change since this is hardcoded in link
        if(queryParams.group_by === "product") {
            barChartData.label = "Review Count by Product - JSON Data";
            const reviewCountByProduct = reviewStore.getReviewCountByProduct();

            // Get x and y values for chart
            Object.keys(reviewCountByProduct).sort().forEach((productID) => {
                const yValue = reviewCountByProduct[productID];
                allValues.push({x: productID, y: yValue});
            });
        }

        // Sort values and keep top 10
        const numValues = 10;
        barChartData.values = allValues.sort((a, b) => (b.y > a.y) ? 1 : -1).slice(0, numValues);

        return barChartData;
    }

    // Create bar chart
    render() {
        const {data} = this.state;
        return (
            <div>
                <h2>{data.label}</h2>
                <BarChart
                    data = {data}
                    width = {800}
                    height = {400}
                    margin = {{top: 50, bottom: 50, left: 100, right: 100}}
                    sort = {sort}
                />
                <style>
                    {
                        `g.x.axis text {
                        font-size: 10px;
                        transform-origin: 25px 50px;
                        transform: rotate(-25deg);
                     }`
                    }
                </style>
            </div>
        )
    }
}

export default view(ReviewsBarChartProduct);