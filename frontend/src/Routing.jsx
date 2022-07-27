import React from 'react';
import {Routes , Route} from 'react-router-dom';
import EditExpense from './Component/EditExpense';
import App from './App';
const Routing = () => {
    return (
        <>
        <Routes>
             <Route exact path='/' element={<App/>}></Route>
             <Route exact path='/home' element={<App/>}></Route>
             <Route exact path='/editexpense/:_id' element={<EditExpense/>}></Route>
          </Routes>
        </>
    );
};

export default Routing;