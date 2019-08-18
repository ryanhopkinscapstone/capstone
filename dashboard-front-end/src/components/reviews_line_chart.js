import React, {Component} from "react";
import {LineChart} from "react-d3-components";
import * as d3 from "d3";
import {view} from "react-easy-state";
import reviewStore from "../stores/review_store";

// Default data in case json fails
let data = [
    {
        label: 'Review Count by Month (Demo)',
        values: [
            {x: new Date(2018, 0), y: 50}, {x: new Date(2018, 1), y: 110},
            {x: new Date(2018, 2), y: 140}, {x: new Date(2018, 3), y: 230},
            {x: new Date(2018, 4), y: 270}, {x: new Date(2018, 5), y: 330},
            {x: new Date(2018, 6), y: 320}, {x: new Date(2018, 7), y: 410},
            {x: new Date(2018, 8), y: 490}, {x: new Date(2018, 9), y: 530},
            {x: new Date(2018, 10), y: 510}, {x: new Date(2018, 11), y: 680},
            {x: new Date(2019, 0), y: 550}, {x: new Date(2019, 1), y: 510},
            {x: new Date(2019, 2), y: 640}, {x: new Date(2019, 3), y: 630},
            {x: new Date(2019, 4), y: 770}, {x: new Date(2019, 5), y: 730},
            {x: new Date(2019, 6), y: 820}, {x: new Date(2019, 7), y: 810},
            {x: new Date(2019, 8), y: 990}, {x: new Date(2019, 9), y: 1250},
            {x: new Date(2019, 10), y: 1810}, {x: new Date(2019, 11), y: 2480},
        ]
    }
];

// Set graph params
const margin = {top: 10, bottom: 50, left: 50, right: 10};
const width = 800 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// Default x range
const xScale = d3.time.scale()
    .domain([new Date(2018, 0, 1), new Date(2019, 11, 31)])
    .range([0, width - 50]);

// Default x values
const xAxis = {tickValues: xScale.ticks(d3.time.month, 2), tickFormat: d3.time.format("%m/%y")};

class ReviewsLineChart extends Component {
    // Set default state
    state = {data: data, xAxis: xAxis, xScale: xScale};

    // Check if component mounted, if reviews contains data, set state with json data instead of default
    // Values needed to build chart are parsed through the data of JSON
    componentDidMount() {
        if(reviewStore.reviews.length > 0) {
            const lineChartData = this.getLineChartData();
            const numMonths = lineChartData[0].values.length;
            const startMonth = lineChartData[0].values[0].x;
            const endMonth = lineChartData[0].values[numMonths - 1].x;
            const xScale = d3.time.scale().domain([startMonth, endMonth]).range([0, width - 50]);
            const tickSize = parseInt(`${numMonths / 8}`);
            const xAxis = {tickValues: xScale.ticks(d3.time.month, tickSize), tickFormat: d3.time.format("%m/%y")};
            this.setState({data: lineChartData, xAxis: xAxis, xScale: xScale});
        }
    }

    getLineChartData() {
        const lineChartData = [{label: "Review Count by Month - JSON Data", values: []}];
        const getReviewsCountByMonth = reviewStore.getReviewCountByMonth();

        // Iterate through each year and month to get x and y values
        Object.keys(getReviewsCountByMonth).sort().forEach((year) => {
            Object.keys(getReviewsCountByMonth[year]).sort().forEach((month) => {
                const xValue = new Date(year, parseInt(month) - 1);
                const yValue = getReviewsCountByMonth[year][month];
                lineChartData[0].values.push({x: xValue, y: yValue});
            })
        });
        return lineChartData;
    }

    // Create line chart
    render() {
        const {data, xAxis, xScale} = this.state;
        return(
            <div>
                <h2>{data[0].label}</h2>
                <LineChart
                    data={data}
                    xScale={xScale}
                    xAxis={xAxis}
                    width={width}
                    height={height}
                    margin={margin}
                />
            </div>
        )
    }
}

export default view(ReviewsLineChart);