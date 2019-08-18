import React from "react";
import {Link} from "react-router-dom";
import Moment from "moment";

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getMonth(realMonth) {
    if (realMonth > 0 && realMonth < 11){
        return month[realMonth];
    } else {
        return "Unknown";
    }
}

function invalidJsonData(jsonData) {
    return (
        jsonData == null || typeof (jsonData) == 'undefined' || jsonData.length <= 0
    );
}

const TableData = {
    loadMessage : (
        <React.Fragment>
            <h2 className="load_text">Loading</h2>
            <div className="loader">$nbsp</div>
        </React.Fragment>
    ),
    getTableData(label, jsonData) {
        if(invalidJsonData(jsonData)) return [];
        // Parse data
        return {
            columns: [
                { label: 'ASIN', field: 'asin', sort: 'disabled' },
                { label: 'Month', field: 'reviewMonth', sort: 'asc' },
                { label: 'Year', field: 'reviewYear', sort: 'asc' },
                { label: 'Date', field: 'reviewDate', sort: 'asc' },
                { label: 'Reviewer ID', field: 'reviewerID', sort: 'disabled' },
                { label: 'Reviewer Name', field: 'reviewerName', sort: 'asc' },
                { label: 'Score', field: 'overall', sort: 'asc' },
                { label: 'Summary', field: 'summary', sort: 'asc' }
            ],
            rows: jsonData.map((object) => {
                const date = new Date(object.unixReviewTime * 1000);
                return {
                    asin: <Link to={`/dashboard/product?id=${object.asin}`}>{object.asin}</Link>,
                    reviewMonth: getMonth(date.getMonth()),
                    reviewYear: date.getFullYear(),
                    reviewDate: Moment(date).format('LL'),
                    reviewerID: <Link to={`/dashboard/reviewer?id=${object.reviewerID}`}>{object.reviewerID}</Link>,
                    reviewerName: object.reviewerName,
                    score: object.overall,
                    summary: object.summary
                }
            })
        }
    },
    getBarChartData(label, maxData, jsonData){
        if(invalidJsonData(jsonData)) return [];
        const barChartData = {
            label: label,
            values: []
        };
        // format for chart consumption
        jsonData.forEach(countObj =>{
            let x = (countObj.hasOwnProperty('reviewerID')) ? countObj.reviewerID : countObj.productID;
            barChartData.values.push([ x, countObj.reviewsCount ]);
        });
        // sort by highest and then limit bars
        barChartData.values = barChartData.values
            .sort((a,b) => (a.y > b.y) ? -1 : 1)
            .slice(0, maxData);
        // add label to front of list
        let tmp = [["ID", "Count"]];
        barChartData.values.forEach( set => tmp.push(set));
        barChartData.values = tmp;
        return barChartData;
    },
    getLineChartData(label, maxData, jsonData){
        if(invalidJsonData(jsonData)) return [];
        const lineChartData = {
            label: label,
            values: []
        };
        // format for chart consumption
        jsonData.forEach(obj => {
            let x = (obj.hasOwnProperty('year')) ? obj.year : obj.month;
            lineChartData.values.push([ x, obj.reviewsCount ]);
        });
        // sort by lowest and then select the last ten elements
        let min = Math.max(lineChartData.values.length - maxData, 0);
        lineChartData.values = lineChartData.values
            .sort((a,b) => (a.y < b.y) ? -1 : 1)
            .slice(min, lineChartData.values.length);
        // add label to front of list
        let tmp = [["x", "Count"]];
        lineChartData.values.forEach( set => tmp.push(set));
        lineChartData.values = tmp;
        return lineChartData;
    },
    getPieChartData(label, jsonData){
        if(invalidJsonData(jsonData)) return [];
        const pieChartData = {
            label: label,
            values: []
        };
        // format for chart consumption
        jsonData.forEach(obj => {
            pieChartData.values.push([ "" + obj.score, obj.reviewsCount ]);
        });
        pieChartData.values = pieChartData.values
            .sort((a,b) => (a.y > b.y) ? -1 : 1)
            .slice(0, 10);
        // add label to front of list
        let tmp = [["Score", "Count"]];
        pieChartData.values.forEach( set => tmp.push(set));
        pieChartData.values = tmp;
        return pieChartData;
    }
};

export default TableData;