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


// Default values for chart
const margin = {top: 10, bottom: 50, left: 50, right: 10};
const width = 800 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;
const xScale = d3.time.scale()
    .domain([new Date(2018, 0, 1),
             new Date(2019, 11, 31)])
    .range([0, width - 50]);
const xAxis = {tickValues: xScale.ticks(d3.time.year, 2), tickFormat: d3.time.format("%Y")};

class ReviewLineChartYear extends Component {
    // Set default state
    state = {data: data, xAxis: xAxis, xScale: xScale};

    // If reviewStore has data, update chart values and state with information from JSON
    componentDidMount() {
        if (reviewStore.reviews.length > 0) {
            const lineChartData = this.getLineChartData();
            const numYears = lineChartData[0].values.length;
            const startYear = lineChartData[0].values[0].x;
            const endYear = lineChartData[0].values[numYears - 1].x;
            const xScale = d3.time.scale().domain([startYear, endYear]).range([0, width - 50]);
            const tickSize = parseInt(`${numYears / 8}`);
            const xAxis = {tickValues: xScale.ticks(d3.time.year, tickSize), tickFormat: d3.time.format("%Y")};

            this.setState({data: lineChartData, xAxis: xAxis, xScale: xScale});
        }
    }

    getLineChartData() {
        const lineChartData = [{label: "Review Count by Year - JSON Data", values: []}];
        const getReviewsCountByYear = reviewStore.getReviewCountByYear();

        // Iterate over reviews to get x and y values
        Object.keys(getReviewsCountByYear).sort().forEach((year) => {
            const xValue = new Date(year);
            const yValue = getReviewsCountByYear[year];
            lineChartData[0].values.push({x: xValue, y: yValue});
        });
        return lineChartData;
    }

    // Generate chart
    render() {
        const {data, xAxis, xScale} = this.state;
        return (
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

export default view(ReviewLineChartYear);