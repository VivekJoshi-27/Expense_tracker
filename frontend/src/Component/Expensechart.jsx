import React from "react";
import './Expensechart.css'

const Expensechart = (props) => {

    let barHeight = "0%";

    if (props.maxPrice > 0) {
        barHeight = Math.round((props.price / props.maxPrice) * 100);
        console.log(barHeight);
    }
    return (
        <>
            <div className="chartBarBackground">
                <div className="chartBar">
                    <div className="chartBarInner" style={{ height: barHeight }}>

                    </div>
                </div>
                <label className="chartBarLabel">{props.label}</label>
            </div>
        </>
    )
}
export default Expensechart;