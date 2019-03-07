import React from 'react';
import axios from 'axios';

import Shifts from '../components/Shifts';
import CustomForm from '../components/Form';

class ShiftList extends React.Component {
    state = {
        shifts: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/shifts/')
            .then(res => {
                this.setState({
                    shifts: res.data
                });
            })
    }

    render() {
        return (
            <div>
                <Shifts data ={ this.state.shifts }/>
                <br />
                <h2>Create a Function</h2>
                <CustomForm 
                    requestType="post"
                    shiftID = {null}
                    btnTxt = "Create"
                />
            </div>
        )
    }
}

export default ShiftList;