import React from "react";
import Expensechart from "./Expensechart";
import './Chart.css'
const Chart = (props) => {
    let ChartDataPoint = [

        { label: "jan", price: 0 },
        { label: "Feb", price: 0 },
        { label: "Mar", price: 0 },
        { label: "Apr", price: 0 },
        { label: "May", price: 0 },
        { label: "Jun", price: 0 },
        { label: "Jul", price: 0 },
        { label: "Aug", price: 0 },
        { label: "Sep", price: 0 },
        { label: "Oct", price: 0 },
        { label: "Nov", price: 0 },
        { label: "Dec", price: 0 },
    ];

    for (let record of props.filteredRecord) {
        let newdate =record.date
        let d =new Date(newdate)
        let month = d.getMonth();
        ChartDataPoint[month].price = record.price;

    }
    let priceArray = props.filteredRecord.map(row => row.price);
    let maxPrice = Math.max(...priceArray);

    return (
        <>
            <div className="dFlex">
                {
                    ChartDataPoint.map(record => {
                        return (
                            <Expensechart label={record.label} maxPrice={maxPrice} price={record.price} />
                        )
                    })
                }
            </div>
        </>
    )
}
export default Chart;