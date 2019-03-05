import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';

import CustomLayout from './containers/Layout';
import ShiftList from './containers/ShiftListView';

class App extends Component {
  render() {
    return (
      <div>
        <CustomLayout>
          <ShiftList />
        </CustomLayout>
      </div>
    );
  }
}

export default App;
