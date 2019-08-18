import React, {Component} from "react";
import {view} from "react-easy-state";

import {Chart} from "react-google-charts";
import AutoSizer from "react-virtualized-auto-sizer";

import API from "../utils/api";
import ParseData from "../utils/parse_data";

class ReviewsLineChart extends Component {
    state = {
        display: ParseData.loadMessage
    };
    loadData(){
        let load = {
            label: 'Review Count By Year',
            api: 'getReviewsCountByYear',
            desc: '',
            maxData: 5
        };
        API.ApiCall(load.api)
            .then(jsonData => {
                let data = ParseData.getLineChartData(load.label, load.maxData, jsonData);
                console.log(data);
                const options = {
                    chartArea: { width: '50%' },
                    hAxis: { title: 'Time' },
                    vAxis: { title: 'Review Count' },
                    legend: {position: 'none'}
                };
                this.setState({
                    display: (
                        <React.Fragment>
                            <h2>{load.label}</h2>
                            <AutoSizer>
                                {({ height, width }) => (
                                    <Chart
                                        chartType="LineChart"
                                        loader={ParseData.loadMessage}
                                        width={width}
                                        height={height}
                                        data={data.values}
                                        options={options}
                                    />
                                )}
                            </AutoSizer>
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
    render() {
        const {display} = this.state;
        return(<div className="half" id="line_chart">{display}</div>);
    }
}
export default view(ReviewsLineChart);
