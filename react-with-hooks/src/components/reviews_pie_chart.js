import React, {Component} from "react";
import {view} from "react-easy-state";
import {Chart} from "react-google-charts";

import API from "../utils/api";
import ParseData from "../utils/parse_data";


class ReviewsPieChart extends Component{
    state = {
        display: ParseData.loadMessage
    };
    loadData(){
        let load = {
            label: 'Reviews By Score',
            api: 'getReviewsCountByScore'
        };
        API.ApiCall(load.api)
            .then(jsonData => {
                const data = ParseData.getPieChartData(load.label, jsonData);
                const options = { };
                this.setState({
                    display: (
                        <React.Fragment>
                            <h2>{data.label}</h2>
                            <Chart
                                width="100%"
                                height="100%"
                                chartType="PieChart"
                                loader={ParseData.loadMessage}
                                data={data.values}
                                options={options}
                            />
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
        return(<div className="half" id="pie_chart">{display}</div>)
    }
}
export default view(ReviewsPieChart);