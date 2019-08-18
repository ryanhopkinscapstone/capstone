import React from "react";
import {Link} from "react-router-dom";

// Creates dashboard submenu
function DashboardMenu() {
    return (
        <div id="dashboard_menu" className="App-menu">
            <ul>
                <li>
                    <Link to="/dashboard/reviews_table">Reviews Table</Link>
                </li>
                <li>
                    <Link to="/dashboard/reviews_pie_chart">Review Count by Score</Link>
                </li>
                <li>
                    <Link to="/dashboard/reviews_line_chart">Review Count by Month</Link>
                </li>
                <li>
                    <Link to="/dashboard/reviews_line_chart_year">Review Count by Year</Link>
                </li>
                <li>
                    <Link to="/dashboard/reviews_bar_chart?group_by=reviewer">Reviewer Bar Chart</Link>
                </li>
                <li>
                    <Link to="/dashboard/reviews_bar_chart_product?group_by=product">Product Bar Chart</Link>
                </li>
            </ul>
        </div>
    );
}

export default DashboardMenu;