import React from "react";
import './Expensedate.css';
const Expensedate = (props) => {



      const newdate = props.row.date

       let d =new Date(newdate)
       const date = d.getFullYear();
       const monthValue = d.toLocaleString("en-us",{month:"long"});
       const dateDay = d.getDate();

    return (
        <>
            <div>
                <h2>{monthValue}</h2>
                <h2>{date}</h2>
                <h1>{dateDay}</h1>
            </div>
        </>
    )

};

export default Expensedate;