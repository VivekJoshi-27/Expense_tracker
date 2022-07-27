import React, { useState , useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const EditExpense = () => {

    const navigate = useNavigate()
    const {_id} = useParams()
    const [item, setItem] = useState("");
    const [price, setPrice] = useState();
    const [date, setDate] = useState();
    const[userData , setuserData] = useState()



     useEffect( () => {
   
       axios.get(`http://localhost:2000/expence/${_id}`)
       .then(async(res) => {
   
         // console.log(res.data);          // in res(response) data will be in data therefore we use res.data for directly show in array//
   
         const rawData = await res.data[0]; 


         setItem(rawData.item)
         setPrice(rawData.price)

         setuserData(rawData);
         
   
       }).catch((err) => {console.log(err)})
     },[] )

     console.log(userData);

     // Update Data //

    const updateHandler = (e) => {
        e.preventDefault();
        const dataObj = {
            item,
            price,
            date: new Date(date)
        }

        console.log(dataObj);

        axios.put(`http://localhost:2000/expence/${_id}`, dataObj);

        alert("Update Succesfully");
        navigate("/");
    }
    return (
        <>
            <form onSubmit={updateHandler}>
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
                        <input type="submit" className="addExpBtn" value="Update Expense"/>
                        <button className="cancelbtn" onClick={() => navigate("/")}>Cancel</button>
                    </div>
                </div>
            </form>
        </>
    )
}


export default EditExpense;