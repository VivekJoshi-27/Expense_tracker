import React, { useState , useEffect} from "react"
import Expensedate from "./Expensedate";
import './Expenses.css'
import Expensefilter from "./Expensefilter";
import Chart from "./Chart";
import * as Icon from 'react-bootstrap-icons';
import { NavLink} from 'react-router-dom';
import axios from "axios";


const Expenses = () => {



    //  Get data from Database// 

    const[userData,setuserData]= useState([])

     useEffect( () => {
   
       axios.get("http://localhost:2000/expence")
       .then(async(res) => {
   
         // console.log(res.data);          // in res(response) data will be in data therefore we use res.data for directly show in array//
   
         const rawData = await res.data; 
         setuserData(rawData);
   
       }).catch((err) => {console.log(err)})
     },[] )
   
     console.log(userData);


     // Filter data via year ///

    const [updateyear, setUpdateyear] = useState(); 

    const filtervalue = (filteryear) => {
        setUpdateyear(filteryear);
    }
    let filterRecord = userData.filter(row => {
        let newdate =row .date
        let d =new Date(newdate)

        if (updateyear == "All") {
            return (row)
        }
        else {
            return (d.getFullYear() == updateyear)
        }
    });


    ///  delete data from database //

    const deletehandle = async(_id) => {
        await axios.delete(`http://localhost:2000/expence/${_id}`)

        alert("Expense Deleted Successfully");
        

        const fildata = userData.filter((row) => {
            return(
                row._id !== _id
            )
        })
        setuserData(fildata);
    }


    return (

        <>
            <div className="mainSection">
                <div className="filterChart">
                    <div className="filterByYear"><h2>Filter By Year</h2></div>
                    <Expensefilter filtervalue={filtervalue} />
                    <Chart filteredRecord={filterRecord} />
                </div>
                {
                    filterRecord.map(row => {
                        return (

                            <div className="container">
                                <div className="expDate">
                                    <Expensedate row={row} />
                                </div>
                                <div className="item">
                                    <h1>{row.item.toUpperCase()}</h1>
                                </div>
                                <div className="btnPrice">
                                    <h2 className="price">${row.price}</h2>
                                </div>
                                <div>
                                    <NavLink exact to={`/editexpense/${row._id}`}><button  type="button" className="actionbtn"><Icon.PencilSquare size={30} /></button></NavLink>
                                    <button onClick={() => deletehandle(row._id)} type="button" className="actionbtn1"><Icon.XLg size={30} /></button>
                                </div>
                            </div>

                        )
                    }
                    )
                }
            </div>

        </>
    )
}
export default Expenses;
