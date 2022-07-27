import React, { useState } from "react";
import './Expenseform.css';
import axios from "axios";

const Expenseform = () => {


    const [item, setItem] = useState("");
    const [price, setPrice] = useState();
    const [date, setDate] = useState();
    const [formview, setFormview] = useState(false);


    const submitHandler = (e) => {
        e.preventDefault();
        const dataObj = {
            item,
            price,
            date: new Date(date)
        }

        console.log(dataObj)
        axios.post("http://localhost:2000/expence", dataObj);

        // click submit button refresh Screen then call function to value is blank
        alert("Expense Added Succesfully");
        setItem("");
        setPrice(0);
        setDate(new Date());
        setFormview(!formview);
    }
    return (
        <>
            <form onSubmit={submitHandler} className={formview ? "dBlock" : "dNone"}>
                <div className="list">
                    <div>
                        <label>Expense Name</label><br />
                        <input type="text" className="inputTitle" onChange={e => setItem(e.target.value)} value={item} />
                    </div>
                    <div>
                        <label>Price</label><br />
                        <input type="number" className="inputTitle" onChange={e => setPrice(e.target.value)} value={price} />
                    </div>
                    <div>
                        <label>Date</label><br />
                        <input type="date" className="inputTitle" onChange={e => setDate(e.target.value)} value={date} />
                    </div><br></br>
                    <div className="addExp">
                        <input type="submit" className="addExpBtn" value="Add Expense" />
                    </div>
                </div>
            </form>
            <div className="newBtn">
                <div className="addNewBtn">
                    <input type="submit" value="New Expense" onClick={() => setFormview(!formview)} className={formview ? "dNone" : "dBlock"} />
                </div>
            </div>
            <div>
            </div>
        </>
    )
}
export default Expenseform;