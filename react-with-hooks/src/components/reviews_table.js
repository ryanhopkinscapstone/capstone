import React, {Component} from "react";
import {MDBDataTable} from "mdbreact";
import {view} from "react-easy-state";

import API from "../utils/api";
import ParseData from "../utils/parse_data";

class ReviewsTable extends Component{
    state = {
        display: ParseData.loadMessage
    };
    loadData(){
        let load = {
            label: 'Last 1,000 Reviews',
            api: 'getReviews'
        };
        API.ApiCall(load.api)
            .then(jsonData => {
                const data = ParseData.getTableData(load.label, jsonData);
                this.setState({
                    display: (
                        <React.Fragment>
                            <h2>{load.label}</h2>
                            <MDBDataTable
                                striped
                                bordered
                                hover
                                scrollX
                                responsive
                                maxHeight="50vh"
                                data={data}
                            />
                        </React.Fragment>
                    )
                });
            });
    }
    componentDidMount() {
        this.loadData();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.useData !== prevProps.useData){
            this.setState(ParseData.loadMessage);
            this.loadData();
        }
    }
    render() {
        const {display} = this.state;
        return (<div className="wide" id="table_chart">{display}</div>)
    }
}
export default view(ReviewsTable);