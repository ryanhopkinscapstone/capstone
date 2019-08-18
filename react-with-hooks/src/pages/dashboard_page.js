import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import reviewStore from "../stores/review_store";
import DashboardMenu from "../components/dashboard_menu";
import ReviewsTable from "../components/reviews_table";
import ReviewsPieChart from "../components/reviews_pie_chart";
import ReviewsLineChart from "../components/reviews_line_chart";
import ReviewsBarChart from "../components/reviews_bar_chart";

// Create dashboard page and routes for each dashboard component
class DashboardPage extends Component{
    componentDidMount() {
        let dataUrl = "../data/data.json";
        reviewStore.loadData(dataUrl);
    }
    render() {
        return (
            <div id="dashboard_page" className="App-menu">
                <DashboardMenu/>
                <Switch>
                    <Route exact path="/dashboard" component={() => "Dashboard Content"}/>
                    <Route path="/dashboard/reviews_table" component={ReviewsTable}/>
                    <Route path="/dashboard/reviews_pie_chart" component={ReviewsPieChart}/>
                    <Route path="/dashboard/reviews_line_chart" component={ReviewsLineChart}/>
                    <Route path="/dashboard/reviews_bar_chart" component={ReviewsBarChart}/>
                </Switch>
            </div>
        );
    }
}

export default DashboardPage;