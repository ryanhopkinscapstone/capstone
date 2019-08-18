import React, {Component} from "react";
import {Chart} from "react-google-charts";
import {view} from "react-easy-state";

import API from "../utils/api";
import ParseData from "../utils/parse_data";

class ReviewsBarChart extends React.Component {
    state = {
        display: ParseData.loadMessage
    };
    loadData(){
        let load = {
            label: 'Reviews By Product',
            api: 'getReviewsCountByProduct',
            desc: "Top 10 Products w/ Most Feedback",
            maxData: 8
        };
        if(this.props.useData === "reviewer"){
            load = {
                label: 'Reviews By Reviewer',
                api: 'getReviewsCountByReviewer',
                desc: "Top 10 Reviewers w/ Total Contributions",
                maxData: 8
            };
        }
        API.ApiCall(load.api)
            .then(jsonData => {
                const data = ParseData.getBarChartData(load.label, load.maxData, jsonData);
                const options = {
                    chartArea: { width: '50%' },
                    hAxis: { title: 'Review Count' },
                    vAxis: { title: 'Top 10' },
                    legend: {position: 'none'}
                };
                this.setState({
                    display: (
                        <React.Fragment>
                            <h2>{data.label}</h2>
                            <Chart
                                width="100%"
                                height="100%"
                                chartType="BarChart"
                                loader={ParseData.loadMessage}
                                data={data.values}
                                options={options}
                            />
                            <p>{load.desc}</p>
                        </React.Fragment>
                    )
                });
            });
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.useData !== prevProps.useData){
            this.setState(ParseData.loadMessage);
            this.loadData();
        }
    }
    componentDidMount() {
        this.loadData();
    }
    render(){
        const {display} = this.state;
        return(<div className="half" id="bar_chart">{display}</div>)
    }
}
export default view(ReviewsBarChart);