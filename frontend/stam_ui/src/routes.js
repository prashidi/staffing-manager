import React from 'react'
import { Route } from 'react-router-dom';

import ShiftList from './containers/ShiftListView';
import ShiftDetail from './containers/ShiftDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ShiftList} />
        <Route exact path='/shifts/:shiftID' component={ShiftDetail} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={Signup} />
    </div>
);

export default BaseRouter;