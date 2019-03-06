import React from 'react'
import { Route } from 'react-router-dom';

import ShiftList from './containers/ShiftListView';
import ShiftDetail from './containers/ShiftDetailView'

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ShiftList} />
        <Route exact path='/:shiftID' component={ShiftDetail} />
    </div>
);

export default BaseRouter;